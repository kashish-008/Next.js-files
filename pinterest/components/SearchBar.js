'use client';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');
  const debouncedTerm = useDebounce(term);

  useEffect(() => {
    onSearch(debouncedTerm);
  }, [debouncedTerm, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search photos by title..."
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      className="w-full md:w-96 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
  );
}