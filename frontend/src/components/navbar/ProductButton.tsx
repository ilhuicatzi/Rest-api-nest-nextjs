"use client";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";

function ProductButton() {
    const router = useRouter();
  return (
    <div>
      {usePathname() === "/" ? (
      <Button 
        onClick={() => {
        router.push("/products/newProduct");
        }}
        variant={"outline"}>
        Crear Producto
      </Button>
    ) : (
      <Button
        onClick={() => {
        router.push("/");
        }}
         variant={"outline"}>
         Home
    </Button>
    )}
    </div>
  )
}

export default ProductButton