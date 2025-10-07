export const QUERY_KEY = {
  FILES: (fileKey: string) => [`files`, fileKey],
  WISHPOOLS_ALL: ['wishpools'],
  WISHPOOL_DETAIL: (wishpoolId: number) => ['wishpool', wishpoolId],
  WISHPOOL_DETAIL_GUEST: (guestId: number) => ['wishpool', 'guest', guestId],
  WISHPOOL_GIFTS_ALL: (wishpoolId: number) => ['wishpool', 'gifts', wishpoolId],
  WISHPOOL_GIFTS_CELEBRANT: (celebrantId: string) => [
    'wishpool',
    'gifts',
    'celebrant',
    celebrantId,
  ],
  AUTH: ['auth'],
} as const;
