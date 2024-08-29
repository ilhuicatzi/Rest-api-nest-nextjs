import axios from "axios";
import CardProduct from "@/components/products/CardProduct";
import { Product } from "@/types/ProductsTypes";

async function loadProducts() {
  try {
    const response = await axios.get("http://localhost:4000/api/products");
    return response.data;
  } catch (error) {
    console.error("Error loading products", error);
  }
}

async function HomePage() {
  const products = await loadProducts();
  //console.log(products);
  return (
    <main className="flex flex-col items-center gap-4 mx-10">
      <h1 className="text-3xl font-bold mb-10">Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {products.map((product: Product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
