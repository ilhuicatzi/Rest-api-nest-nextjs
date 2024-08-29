"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter, usePathname } from "next/navigation";
import { Product } from "@/types/ProductsTypes";
import { useEffect, useState } from "react";
import { DeleteProductButton } from "./DeleteProductButton";

const getProductPathId = (pathname: string) => {
  const parts = pathname.split("/");
  return parts[parts.length - 1];
};

const FormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string(),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number")
    .transform((value) => parseFloat(value)),
  image: z.string().url("Invalid URL").optional().or(z.literal("")),
});

function EditProductForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [product, setProduct] = useState<Product | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      image: "",
    },
  });

  useEffect(() => {
    const id = getProductPathId(pathname);
    const getProduct = async (id: string) => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/${id}`
        );
        return response.data;
      } catch (error) {
        console.error("Error loading product", error);
      }
    };

    getProduct(id).then((data) => {
      if (data) {
        setProduct(data);
        form.reset({
          name: data.name,
          description: data.description,
          price: data.price.toString(),
          image: data.image,
        });
      }
    });
  }, [pathname, form]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (product) {
      try {
        const result = await axios.patch(
          `http://localhost:4000/api/products/${product.id}`,
          data
        );
        if (result.status === 200) {
          router.push("/");
        } else {
          console.log("Error updating product");
          alert("Error updating product");
        }
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  }

  if (!product) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos del producto
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 px-5 sm:px-10 rounded-xl bg-background py-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Producto</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del producto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Una descripción del producto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  step="0.01"
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de la Imagen</FormLabel>
              <FormControl>
                <Input placeholder="https:" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex mx-auto sm:justify-between items-center flex-col w-3/5 sm:w-full space-y-4 sm:flex-row">
          <Button
            type="button"
            className="w-full sm:w-auto"
            variant="secondary"
            onClick={() => router.push("/")}
          >
            Cancelar
          </Button>
          <DeleteProductButton id={product.id} />
          <Button type="submit" className="w-full sm:w-auto">
            Actualizar
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default EditProductForm;
