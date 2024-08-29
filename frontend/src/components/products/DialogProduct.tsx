"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Product } from "@/types/ProductsTypes";

export function DialogProduct({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex items-center gap-1">
          Ver más
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription>
            <span className="text-primary text-xl font-semibold">
              ${product.price}
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <div className="mb-4">
              <p className="font-semibold mb-2">Descripción</p>
              <div>{product.description}</div>
            </div>
            <div className="mb-4">
              <p className="font-semibold mb-2">Creado</p>
              <div>{product.createdAt}</div>
            </div>
          </div>
          <div>
            <Image
              className="w-72 h-64 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
