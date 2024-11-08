// app/services/page.tsx
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        
        {/* Service 1 */}
        <div className="p-6 bg-white rounded-md shadow-md">
          <Image src="/images/consulting-icon.svg" alt="Consulting" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Product Consulting</h3>
          <p className="text-gray-700">
            Our experts can help you choose the right part for your specific vehicle make and model.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-white rounded-md shadow-md">
          <Image src="/images/custom-order-icon.svg" alt="Custom Orders" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Custom Orders</h3>
          <p className="text-gray-700">
            We handle special requests for hard-to-find parts and ensure they meet manufacturer standards.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white rounded-md shadow-md">
          <Image src="/images/support-icon.svg" alt="Support" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">After-Sales Support</h3>
          <p className="text-gray-700">
            Our customer support team is here to assist with any issues or questions after your purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
