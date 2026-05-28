import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl text-white mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to ShopEase
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover amazing products at unbeatable prices
        </p>
        <Link
          href="/categories"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Browse Categories →
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">On orders over INR 1 99</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Always here to help</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-600">7-day return policy</p>
        </div>
      </section>

      {/* Product Categories Button */}
      <div className="text-center">
        <Link
          href="/categories"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-lg"
        >
          Show Product Categories
        </Link>
      </div>
    </div>
  );
}