// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Contact Me 📬
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl">
        <p className="text-gray-600 mb-6">
          Have a question or want to collaborate? Fill the form below!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
}