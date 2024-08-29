import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogProduct } from "@/components/products/DialogProduct";
import Image from "next/image";
import { Product } from "@/types/ProductsTypes";
import Link from "next/link";

function CardProduct({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <CardDescription className="text-lg font-medium text-primary">
            ${product.price}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="truncate w-56 mb-5">
          {product.description}
        </CardDescription>
        <div className="flex justify-center items-center w-56 overflow-hidden rounded-lg">
          <Image
            className="w-56 h-44 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/products/${product.id}`}>
          <Button variant="secondary">Editar</Button>
        </Link>
        <DialogProduct product={product} />
      </CardFooter>
    </Card>
  );
}

export default CardProduct;
