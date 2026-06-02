'use client';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

export default function PhotoCard({ photo, draggableProps, dragHandleProps }) {
  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <Link href={`/photo/${photo.id}`}>
        <img
          src={photo.thumbnailUrl}
          alt={photo.title}
          className="w-full h-64 object-cover cursor-pointer"
        />
      </Link>
      <FavoriteButton photoId={photo.id} />
      <p className="p-2 text-sm truncate bg-white/80 absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition">
        {photo.title}
      </p>
    </div>
  );
}