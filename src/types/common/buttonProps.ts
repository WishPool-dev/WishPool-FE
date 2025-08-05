import type { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { button } from '@/components/common/Button/Button.style';

export type ButtonStyleProps = VariantProps<typeof button>;

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
} & ButtonStyleProps;
