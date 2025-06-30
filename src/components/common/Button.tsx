import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
} & VariantProps<typeof button>;

const button = cva(
  'rounded-[12px] w-full h-[5.6rem] flex justify-center items-center',
  {
    variants: {
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
      textSize: 'lg',
      backgroundColor: 'dark',
      textColor: 'white',
    },
  },
);

const Button = ({
  children,
  textSize,
  backgroundColor,
  textColor,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={button({ textSize, backgroundColor, textColor })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
