export const PATH = {
  INTRO: '/intro',
  HOME: '/',
  WISHPOOL_INTRO: '/wishpool/intro',
  WISHPOOL_CREATE: '/wishpool/create',
  MYPAGE: '/mypage',
  FEEDBACK: '/feedback',
  WISHPOOL_HISTORY: '/wishpool/history',

  WISHPOOL_PREVIEW: (id: number) => `/wishpool/${id}/preview`,
  WISHPOOL_SHARE: (id: number) => `/wishpool/${id}/share`,
  WISHPOOL_DETAIL: (id: number) => `/wishpool/${id}`,
  WISHPOOL_EDIT: (id: number) => `/wishpool/${id}/edit`,
  WISHPOOL_GIFTS: (id: number) => `/wishpool/${id}/gifts`,

  FUNDING_INTRO: '/funding/intro',
  FUNDING_SELECT: '/funding/select',
  FUNDING_LIST: '/funding/list',
  FUNDING_PREVIEW: '/funding/preview',
  FUNDING_COMPLETE: '/funding/complete',
};
