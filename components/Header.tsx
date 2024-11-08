// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Eon Trading Regal</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-primaryRed">Home</Link>
          <Link href="/products" className="hover:text-primaryRed">Products</Link>
          <Link href="/about" className="hover:text-primaryRed">About</Link>
          <Link href="/services" className="hover:text-primaryRed">Services</Link>
          <Link href="/contact" className="hover:text-primaryRed">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block px-4 py-2 text-white hover:text-primaryRed" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="block px-4 py-2 text-white hover:text-primaryRed" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:text-primaryRed" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 text-white hover:text-primaryRed" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:text-primaryRed" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
