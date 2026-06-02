import { PHOTOS_PER_PAGE } from './constants';

// Use Picsum (no API key) and map its response to the app's expected photo shape.
export async function fetchPhotos(start = 0, limit = PHOTOS_PER_PAGE) {
  const page = Math.floor(start / limit) + 1;
  const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch photos from Picsum');
  const data = await res.json();
  // Map Picsum items to the expected structure: { id, title, thumbnailUrl, url }
  return data.map((item) => ({
    id: item.id,
    title: item.author,
    thumbnailUrl: `https://picsum.photos/id/${item.id}/600/400`,
    url: item.download_url
  }));
}

export async function fetchPhotoById(id) {
  const res = await fetch(`https://picsum.photos/id/${id}/info`);
  if (!res.ok) throw new Error('Failed to fetch photo from Picsum');
  const item = await res.json();
  return {
    id: item.id,
    title: item.author,
    thumbnailUrl: `https://picsum.photos/id/${item.id}/600/400`,
    url: item.download_url
  };
}