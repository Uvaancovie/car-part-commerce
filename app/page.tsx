// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="w-full bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Eon Trading Regal</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Your trusted source for American car parts and spares. We specialize in high-quality Chrysler, Jeep, and Dodge parts.
        </p>
        <Link href="/products">
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition">
            Browse Products
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-md shadow-md">
          <Image src="/images/engine-icon.svg" alt="Engine" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Authentic Parts</h3>
          <p className="text-gray-700">
            We supply only authentic, high-quality parts that meet the rigorous standards of American car manufacturers.
          </p>
        </div>
        <div className="p-6 bg-white rounded-md shadow-md">
          <Image src="/images/shipping-icon.svg" alt="Shipping" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Fast Shipping</h3>
          <p className="text-gray-700">
            With reliable shipping options, your parts are delivered quickly and safely to your door.
          </p>
        </div>
        <div className="p-6 bg-white rounded-md shadow-md">
          <Image src="/images/support-icon.svg" alt="Support" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Expert Support</h3>
          <p className="text-gray-700">
            Our experts are here to help you find exactly what you need for your vehicle.
          </p>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-16 px-6 w-full bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Sample Product Cards */}
          <div className="bg-white rounded-md shadow-md p-4">
            <Image src="/images/chrysler-engine.jpg" alt="Chrysler Engine" width={300} height={200} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Chrysler Engine</h3>
            <p className="text-blue-600 font-bold mb-2">$500</p>
            <p className="text-gray-700 mb-4">High-performance engine for Chrysler vehicles.</p>
            <Link href="/products/1">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <Image src="/images/jeep-transmission.jpg" alt="Jeep Transmission" width={300} height={200} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Jeep Transmission</h3>
            <p className="text-blue-600 font-bold mb-2">$700</p>
            <p className="text-gray-700 mb-4">Durable transmission for Jeep models.</p>
            <Link href="/products/2">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <Image src="/images/dodge-brake-pads.jpg" alt="Dodge Brake Pads" width={300} height={200} className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Dodge Brake Pads</h3>
            <p className="text-blue-600 font-bold mb-2">$150</p>
            <p className="text-gray-700 mb-4">High-quality brake pads suitable for Dodge cars.</p>
            <Link href="/products/3">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/products">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-700 transition">
              View All Products
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
