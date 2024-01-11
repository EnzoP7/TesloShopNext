import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}
export default function ({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  // if (id === "kids") {
  //   notFound();
  // }
  return (
    <>
      <Title
        title="Tienda"
        subtitle={`Articulos ${labels[id]}`}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
