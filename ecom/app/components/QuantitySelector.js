'use client';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrease}
        className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      >
        <FaMinus className="text-sm" />
      </button>
      <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
      <button
        onClick={onIncrease}
        className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      >
        <FaPlus className="text-sm" />
      </button>
    </div>
  );
}