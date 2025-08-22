import { cva } from 'class-variance-authority';

export const button = cva(
  'rounded-[12px] w-full h-[5.6rem] flex justify-center items-center',
  {
    variants: {
      textSize: {
        sm: 'title1',
        md: 'title2',
        lg: 'head1',
      },
      backgroundColor: {
        dark: 'bg-button-color',
        light: 'bg-background-02',
        disabled: 'bg-gray-300',
        transparent: 'transparent',
        gradient: 'bg-gradient-to-b from-sub-blue to-blue-primary',
      },
      textColor: {
        black: 'text-text',
        gray: 'text-gray-600',
        white: 'text-white',
      },
    },
    defaultVariants: {
      textSize: 'lg',
      backgroundColor: 'dark',
      textColor: 'white',
    },
  },
);
