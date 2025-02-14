import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductDetails from "./ProductDetails";
import { notFound } from "next/navigation";

// This data would typically come from a database or API
export const products = [
  {
    id: "1",
    name: "Organic Avocados",
    description:
      "Our premium organic avocados are hand-picked from certified organic farms. Rich in healthy fats, fiber, and essential nutrients, these creamy delights are perfect for your healthy lifestyle. Each avocado is carefully selected at peak ripeness to ensure the best taste and texture.",
    price: 299,
    oldPrice: 399,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3",
    company: {
      name: "Green Valley Farms",
      logo: "https://i.pravatar.cc/150?img=1",
    },
    nutrients: [
      { name: "Protein", value: "2g" },
      { name: "Fat", value: "15g" },
      { name: "Carbs", value: "9g" },
      { name: "Fiber", value: "7g" },
    ],
  },
];

export async function generateStaticParams() {
  // Ensure that every product has a valid id and convert it to a string.
  return products
    .filter((product) => product.id)
    .map((product) => ({
      id: product.id.toString(),
    }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    // If no product is found, render the 404 page.
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="text-green-600 hover:text-green-700 flex items-center gap-2 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">{product.name}</span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
