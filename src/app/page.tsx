import { Product, ProductList } from "@/types/Product";
import Cards from "@/components/styledComponent/Cards/Cards";
import CardContainer from "@/components/tailwind/containers/CardContainer";
import { ProductCard } from "@/components/tailwind/cardProduct/cardProduct";
import Navbar from "@/components/layout/Navbar";
import { config } from "./config/host";

async function getProducts(): Promise<ProductList> {
  try {
    const res = await fetch(config.backendUrl);

    const data = await res.json();
    return data;
    return [];
  } catch (error) {
    console.error("Error al obtener los productos", error);
    return [];
  }
}

// manejo de errores (try catch)

export default async function Home() {
  const productList = await getProducts();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="my-10 text-3xl">Productos</h1>
      <CardContainer>
        {productList.map((product) => (
          <ProductCard
            key={"card" + product.id}
            title={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </CardContainer>
    </main>
  );
}
