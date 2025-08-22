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

  JOIN_INFO: `/wishpool/join/info`,
  JOIN_INTRO: `/wishpool/join/intro`,
  JOIN_GIFTS: `/wishpool/join/gifts`,
  JOIN_NAME: `/wishpool/join/name`,
  JOIN_ADD: `/wishpool/join/add`,
  JOIN_PREVIEW: `/wishpool/join/preview`,
  JOIN_COMPLETE: `/wishpool/join/complete`,
};
