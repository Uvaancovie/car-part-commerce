// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Eon Trading Regal",
  description: "American car parts and spares for Chrysler, Dodge, and Jeep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-6 max-w-7xl mx-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center p-4 mt-8">
          &copy; {new Date().getFullYear()} Eon Trading Regal - American Car Parts
        </footer>
      </body>
    </html>
  );
}
