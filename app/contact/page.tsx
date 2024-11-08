// app/contacts/page.tsx
export default function ContactPage() {
    return (
      <div className="max-w-2xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Have questions about our products or services? Get in touch with us, and we will be happy to assist.
        </p>
  
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              className="w-full p-3 border rounded-md"
              placeholder="Write your message"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  