// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Server component for product detail
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await params if it's a Promise

  const product = products.find((p) => p.id === parseInt(id, 10));

  // Show 404 page if product not found
  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-auto mb-6 rounded-md"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-900 font-semibold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-gray-600 mb-2">Available Stock: {product.stock}</p>
          <p className="text-yellow-500 mb-6">Rating: {product.rating} ⭐ ({product.reviews} reviews)</p>

          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition mb-6">
            Add to Cart
          </button>

          <Link href="/products" className="text-blue-600 hover:underline">
            &larr; Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
