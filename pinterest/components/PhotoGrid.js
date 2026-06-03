'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { usePhotos } from '@/hooks/usePhotos';
import { filterPhotosByTitle } from '@/utils/helpers';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';
import LoadingSkeleton from './LoadingSkeleton';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

// Breakpoint columns for masonry
const breakpointColumns = {
  default: 4,    // ≥ 1100px
  1100: 3,
  700: 2,
  500: 1
};

export default function PhotoGrid({ initialPhotos }) {
  const { photos: hookPhotos, loading, hasMore, loadMore } = usePhotos();
  const [allPhotos, setAllPhotos] = useState(initialPhotos);
  
  // Merge new photos from hook
  useEffect(() => {
    if (hookPhotos.length > 0) {
      setAllPhotos(prev => {
        const existingIds = new Set(prev.map(p => p.id));
        const newPhotos = hookPhotos.filter(p => !existingIds.has(p.id));
        return [...prev, ...newPhotos];
      });
    }
  }, [hookPhotos]);

  const [searchTerm, setSearchTerm] = useState('');
  const [displayedPhotos, setDisplayedPhotos] = useState(initialPhotos);

  useEffect(() => {
    const filtered = filterPhotosByTitle(allPhotos, searchTerm);
    setDisplayedPhotos(filtered);
  }, [allPhotos, searchTerm]);

  // Infinite scroll
// Inside PhotoGrid component, after your state declarations

const loaderRef = useRef(null);
const isLoadingMore = useRef(false);  // lock to prevent multiple loads

useEffect(() => {
  if (searchTerm) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const target = entries[0];
      // Only trigger if loader is intersecting, not already loading, and more photos exist
      if (target.isIntersecting && !isLoadingMore.current && hasMore) {
        isLoadingMore.current = true;
        loadMore().finally(() => {
          // Unlock after a short delay to avoid rapid refires
          setTimeout(() => {
            isLoadingMore.current = false;
          }, 500);
        });
      }
    },
    { 
      threshold: 0.1,       // trigger when 10% visible
      rootMargin: '0px 0px 200px 0px'  // load when 200px before bottom (smoother)
    }
  );

  const currentLoader = loaderRef.current;
  if (currentLoader) observer.observe(currentLoader);

  return () => {
    if (currentLoader) observer.unobserve(currentLoader);
  };
}, [searchTerm, hasMore, loadMore]); // note: loading is not a dependency; we use ref

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(displayedPhotos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDisplayedPhotos(items);
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
              <Masonry
                breakpointCols={breakpointColumns}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
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
              </Masonry>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {!searchTerm && (
        <div ref={loaderRef} className="flex justify-center py-8">
          {loading && <LoadingSkeleton />}
          {!hasMore && !loading && allPhotos.length > 20 && (
            <p className="text-gray-500 text-center">✨ You've reached the end ✨</p>
          )}
        </div>
      )}
    </div>
  );
}