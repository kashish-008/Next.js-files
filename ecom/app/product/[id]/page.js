'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { useAppContext } from '@/context/AppContext';
import QuantitySelector from '@/components/QuantitySelector';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="max-w-6xl mx-auto">
      <Link href="/categories" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Categories
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        {/* Left side - Product Images */}
        <div>
          <div className="relative h-96 rounded-lg overflow-hidden mb-4">
            <Image
              src={product.images[selectedImage] || product.thumbnail}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative w-20 h-20 rounded border-2 overflow-hidden ${
                  selectedImage === idx ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          
          <div className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price}
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity:</label>
            <QuantitySelector
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            
            <button
              onClick={() => toggleWishlist(product.id, product.name)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg border transition ${
                isWishlisted
                  ? 'bg-red-500 text-white border-red-500'
                  : 'border-gray-300 text-gray-700 hover:bg-red-50'
              }`}
            >
              <FaHeart className={isWishlisted ? 'text-white' : 'text-red-500'} />
              {isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </button>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">
              ✓ Free shipping on orders over $50
            </p>
            <p className="text-sm text-gray-500">
              ✓ 30-day easy returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}