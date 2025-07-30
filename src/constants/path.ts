// path.ts
export const PATH = {
  INTRO: '/intro',
  HOME: '/',
  WISH_CREATE: '/wishpool/create',
  WISH_DETAIL: (id: string | number) => `/wishpool/${id}`,
};
