// app/products/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import products from "../../data/products.json";

export default function ProductsPage() {
  // State for search input and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  // Unique categories and brands for filters
  const categories = [...new Set(products.map((product) => product.category))];
  const brands = [...new Set(products.map((product) => product.brand))];

  // Filtered products based on search, category, and brand
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    const matchesBrand = brandFilter ? product.brand === brandFilter : true;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Our Products</h2>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-md w-full md:w-1/3 mb-4 md:mb-0"
        />
        
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-3 border rounded-md w-full md:w-1/3 mb-4 md:mb-0"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="p-3 border rounded-md w-full md:w-1/3"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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

            {/* View Product Button */}
            <Link href={`/products/${product.id}`}>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-700 mt-8">No products found matching your criteria.</p>
      )}
    </div>
  );
}
