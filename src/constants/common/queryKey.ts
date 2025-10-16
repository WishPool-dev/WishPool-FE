export const QUERY_KEY = {
  FILES: (fileKey: string) => [`files`, fileKey],
  WISHPOOLS_ALL: ['wishpools'],
  WISHPOOL_DETAIL: (wishpoolId: number) => ['wishpool', wishpoolId],
  WISHPOOL_DETAIL_GUEST: (shareIdentifier: string) => [
    'wishpool',
    'guest',
    shareIdentifier,
  ],
  WISHPOOL_GIFTS_ALL: (wishpoolId: number) => ['wishpool', 'gifts', wishpoolId],
  WISHPOOL_GIFTS_CELEBRANT: (chosenIdentifier: string | null) => [
    'wishpool',
    'gifts',
    'celebrant',
    chosenIdentifier,
  ],

  WISHPOOL_JOIN_URL: (wishpoolId: number) => ['wishpool', wishpoolId],

  AUTH: ['auth'],
  PROFILE: ['profile'],
} as const;
