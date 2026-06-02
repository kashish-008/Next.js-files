import { API_BASE, PHOTOS_PER_PAGE } from './constants';

export async function fetchPhotos(start = 0, limit = PHOTOS_PER_PAGE) {
  const res = await fetch(
    `${API_BASE}/photos?_start=${start}&_limit=${limit}`
  );
  if (!res.ok) throw new Error('Failed to fetch photos');
  return res.json();
}

export async function fetchPhotoById(id) {
  const res = await fetch(`${API_BASE}/photos/${id}`);
  if (!res.ok) throw new Error('Failed to fetch photo');
  return res.json();
}