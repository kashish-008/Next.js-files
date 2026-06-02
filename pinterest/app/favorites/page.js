'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import PhotoCard from '@/components/PhotoCard';

export default function FavoritesPage() {
  const [favorites] = useLocalStorage('favorites', []);
  const [favPhotos, setFavPhotos] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      const promises = favorites.map(id =>
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json())
      );
      const results = await Promise.all(promises);
      setFavPhotos(results);
    }
    fetchFavorites();
  }, [favorites]);

  if (favPhotos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-600">No favorites yet. ❤️</p>
        <Link href="/" className="text-pink-500 underline mt-4 inline-block">Browse photos</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {favPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}