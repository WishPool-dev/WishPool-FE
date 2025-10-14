export const PATH = {
  INTRO: '/intro',
  HOME: '/',
  LOGIN: '/login',
  REDIRECT: '/login/oauth2/code/kakao',

  WISHPOOL_INTRO: '/wishpool/intro',
  WISHPOOL_CREATE_STEP1: '/wishpool/create/step1',
  WISHPOOL_CREATE_STEP2: '/wishpool/create/step2',
  WISHPOOL_CREATE_STEP3: '/wishpool/create/step3',
  WISHPOOL_CREATE_STEP4: '/wishpool/create/step4',

  MYPAGE: '/mypage',
  FEEDBACK: '/feedback',
  WISHPOOL_HISTORY: '/wishpool/history',

  WISHPOOL_PREVIEW: '/wishpool/preview',
  WISHPOOL_SHARE: '/wishpool/share',
  WISHPOOL_DETAIL: (id: number) => `/wishpool/${id}`,
  WISHPOOL_EDIT: (id: number) => `/wishpool/${id}/edit`,
  WISHPOOL_GIFTS: (id: number) => `/wishpool/${id}/gifts`,
  WISHPOOL_INVITE: (id: number) => `/wishpool/${id}/invite`,

  PICK_INVITE: '/pick/invite',
  PICK_INTRO: '/pick/intro',
  PICK_SELECT: '/pick/select',
  PICK_LIST: '/pick/list',
  PICK_PREVIEW: '/pick/preview',
  PICK_COMPLETE: '/pick/complete',

  JOIN_INFO: (id: number) => `/wishpool/join/${id}/info`,
  JOIN_INTRO: (id: number) => `/wishpool/join/${id}/intro`,
  JOIN_GIFTS: (id: number) => `/wishpool/join/${id}/gifts`,
  JOIN_NAME: (id: number) => `/wishpool/join/${id}/name`,
  JOIN_ADD: (id: number) => `/wishpool/join/${id}/add`,
  JOIN_PREVIEW: (id: number) => `/wishpool/join/${id}/preview`,
  JOIN_COMPLETE: (id: number) => `/wishpool/join/${id}/complete`,
};
