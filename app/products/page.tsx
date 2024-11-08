// app/products/page.tsx
import products from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md flex flex-col items-center bg-white shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-blue-600 font-bold mb-2">${product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>

            {/* Link to Product Detail Page */}
            <Link href={`/products/${product.id}`}>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
