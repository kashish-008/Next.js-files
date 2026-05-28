'use client';
import { useAppContext } from '@/context/AppContext';
import { products } from '@/data/products';
import { formatPrice } from '@/utils/formatPrice';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaTrash } from 'react-icons/fa';

export default function WishlistPage() {
  const { wishlistIds, toggleWishlist } = useAppContext();
  const wishlistProducts = products.filter(p => wishlistIds.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <FaHeart className="text-6xl text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
        <p className="text-gray-600 mb-6">Save your favorite items here!</p>
        <Link href="/categories" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Wishlist ({wishlistProducts.length})</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image src={product.thumbnail} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-1">{formatPrice(product.price)}</p>
              <div className="flex gap-2 mt-3">
                <Link href={`/product/${product.id}`} className="flex-1 text-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
                  View Details
                </Link>
                <button
                  onClick={() => toggleWishlist(product.id, product.name)}
                  className="px-3 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}