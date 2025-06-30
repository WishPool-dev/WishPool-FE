import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

type ButtonProps = {
  children: React.ReactNode;
} & VariantProps<typeof button>;

const button = cva(
  'rounded-[12px] h-[5.6rem] flex justify-center items-center',
  {
    variants: {
      size: {
        sm: 'w-[17.1rem]',
        lg: 'w-[35.3rem]',
      },
      textSize: {
        sm: 'title1',
        lg: 'head1',
      },
      backgroundColor: {
        dark: 'bg-button-color',
        light: 'bg-background-02',
        gray: 'bg-gray-600',
        disabled: 'bg-gray-300',
      },
      textColor: {
        black: 'text-text',
        gray: 'text-gray-400',
        white: 'text-white',
      },
    },
    defaultVariants: {
      size: 'lg',
      textSize: 'lg',
      backgroundColor: 'dark',
      textColor: 'white',
    },
  },
);

const Button = ({
  children,
  size,
  textSize,
  backgroundColor,
  textColor,
}: ButtonProps) => {
  return (
    <button className={button({ size, textSize, backgroundColor, textColor })}>
      {children}
    </button>
  );
};

export default Button;
