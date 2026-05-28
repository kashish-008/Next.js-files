'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
      <div className="relative h-48">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-xl font-bold text-blue-600 mb-3">${product.price}</p>
        
        <div className="flex gap-2">
          <button
            onClick={() => toggleWishlist(product.id, product.name)}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border transition ${
              isWishlisted 
                ? 'bg-red-500 text-white border-red-500' 
                : 'border-gray-300 text-gray-700 hover:bg-red-50'
            }`}
          >
            <FaHeart className={isWishlisted ? 'text-white' : 'text-red-500'} />
            <span className="text-sm">Wishlist</span>
          </button>
          
          <button
            onClick={() => addToCart(product, 1)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <FaShoppingCart className="text-sm" />
            <span className="text-sm">Cart</span>
          </button>
          
          <Link
            href={`/product/${product.id}`}
            className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
          >
            <FaInfoCircle className="text-gray-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}