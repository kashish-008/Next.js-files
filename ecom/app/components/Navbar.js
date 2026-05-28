'use client';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';
import CartSidebar from './CartSidebar'; // Import the sidebar

export default function Navbar() {
  const { getCartTotalCount, wishlistIds, openCart } = useAppContext(); // use openCart, not link
  const cartCount = getCartTotalCount();
  const wishlistCount = wishlistIds.length;

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ShopEase
          </Link>

          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition">
              Categories
            </Link>
            
            {/* Wishlist Icon - still links to page */}
            <Link href="/wishlist" className="relative">
              <FaHeart className="text-2xl text-gray-700 hover:text-red-500 transition" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon - now opens sidebar */}
            <button onClick={openCart} className="relative focus:outline-none">
              <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <CartSidebar /> {/* Render sidebar here */}
    </>
  );
}