import Link from 'next/link';
import { FaStore, FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Large 404 graphic */}
        <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FaStore className="text-6xl text-gray-400" />
        </div>
        
        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaHome />
            Go to Homepage
          </Link>
          
          <Link
            href="/categories"
            className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            <FaSearch />
            Browse Categories
          </Link>
        </div>
        
        {/* Fun suggestion */}
        <p className="text-sm text-gray-400 mt-8">
          Try checking the URL or head back to our shop!
        </p>
      </div>
    </div>
  );
}