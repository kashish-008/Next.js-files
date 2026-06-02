'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import { usePhotos } from '@/hooks/usePhotos';
import { filterPhotosByTitle } from '@/utils/helpers';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';
import LoadingSkeleton from './LoadingSkeleton';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import MasonryGrid from './MasonryGrid';

export default function PhotoGrid({ initialPhotos }) {
  const [photos, setPhotos] = useState(initialPhotos);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedPhotos, setDisplayedPhotos] = useState(initialPhotos);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const pageRef = useRef(1);

  // Infinite scroll with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !loadingMore && hasMore && !searchTerm) {
          setLoadingMore(true);
          const nextPage = pageRef.current + 1;
          const start = (nextPage - 1) * 20;
          const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=20`);
          const newPhotos = await res.json();
          if (newPhotos.length < 20) setHasMore(false);
          setPhotos(prev => [...prev, ...newPhotos]);
          pageRef.current = nextPage;
          setLoadingMore(false);
        }
      },
      { threshold: 0.1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadingMore, hasMore, searchTerm]);

  // Update displayed photos when search or photos change
  useEffect(() => {
    let filtered = filterPhotosByTitle(photos, searchTerm);
    setDisplayedPhotos(filtered);
  }, [photos, searchTerm]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(displayedPhotos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDisplayedPhotos(items);
    // Optional: sync with original photos list? We'll keep separate for drag demo.
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm py-4 mb-6 flex justify-center">
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="grid" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {displayedPhotos.map((photo, index) => (
                  <Draggable key={photo.id} draggableId={String(photo.id)} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PhotoCard photo={photo} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {!searchTerm && (
        <div ref={loaderRef} className="flex justify-center py-8">
          {loadingMore && <LoadingSkeleton />}
          {!hasMore && <p className="text-gray-500">No more photos 🎉</p>}
        </div>
      )}
    </div>
  );
}