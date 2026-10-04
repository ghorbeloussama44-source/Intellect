import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/media/*.{png,jpg,jpeg,webp}', { eager: true });

/** Image optionnelle déposée par `npm run media` / `npm run images` ; undefined tant qu'elle n'existe pas. */
export const getMedia = (name: string): ImageMetadata | undefined =>
  Object.entries(files).find(([path]) => path.endsWith(`/${name}`))?.[1].default;

/** Vignette de carte de service : fichier attendu dans src/assets/media/. */
export const CARD_PHOTOS: Record<string, string> = {
  'german-courses': 'card-de.jpg',
  'medicine-germany': 'card-med.jpg',
  'study-russia': 'card-ru.jpg',
  'student-support': 'card-all.jpg',
};
