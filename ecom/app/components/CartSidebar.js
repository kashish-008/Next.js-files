'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';
import { formatPrice } from '@/utils/formatPrice';

export default function CartSidebar() {
  const { isCartOpen, closeCart, cartItems, updateQuantity, getCartTotalPrice } = useAppContext();
  const totalPrice = getCartTotalPrice();

  return (
    <>
      {/* Overlay - darkens background */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart </h2>
          <button onClick={closeCart} className="p-1 hover:bg-gray-100 rounded">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link href="/categories" onClick={closeCart} className="text-blue-600 hover:underline">
                Continue Shopping →
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 border-b pb-3">
                  <div className="relative w-20 h-20 flex shrink-0">
                    <Image src={item.thumbnail} alt={item.name} fill className="object-cover rounded" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-blue-600 font-bold text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border rounded hover:bg-gray-100"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border rounded hover:bg-gray-100"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.id, 0)}
                        className="text-red-500 text-xs hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with total and checkout */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 bg-gray-50 absolute bottom-0 left-0 right-0">
            <div className="flex justify-between font-semibold text-lg mb-3">
              <span>Total:</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Proceed to Checkout
            </button>
            <button 
              onClick={closeCart}
              className="w-full text-center text-sm text-gray-500 mt-2 hover:text-gray-700"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}