import { PATH } from '@/constants/common/path';

export type Step = 1 | 2 | 3 | 4;

export const STEPS = {
  STEP1: 1 as Step,
  STEP2: 2 as Step,
  STEP3: 3 as Step,
  STEP4: 4 as Step,
} as const;

export const STEP_PATHS: Record<Step, string> = {
  1: PATH.WISHPOOL_CREATE_STEP1,
  2: PATH.WISHPOOL_CREATE_STEP2,
  3: PATH.WISHPOOL_CREATE_STEP3,
  4: PATH.WISHPOOL_CREATE_STEP4,
};

export const PROGRESS_STEPS: { step: Step; label: string }[] = [
  { step: 1, label: '생일자' },
  { step: 2, label: '위시풀 소개' },
  { step: 3, label: '썸네일' },
  { step: 4, label: '마감일' },
];
