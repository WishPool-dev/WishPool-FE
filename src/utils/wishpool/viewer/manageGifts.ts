import { GiftItemDto } from '@/api/domain/join/types';
const STORAGE_KEY = 'wishpool_gifts';

export function readGifts(): GiftItemDto[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeGifts(next: GiftItemDto[]) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function patchGift(index: number, patch: Partial<GiftItemDto>) {
  const current = readGifts();

  const base: GiftItemDto = current[index] ?? {
    itemName: '',
    itemUrl: '',
    imageUrl: '',
  };
  const next = [...current];
  next[index] = { ...base, ...patch };
  writeGifts(next);
}
