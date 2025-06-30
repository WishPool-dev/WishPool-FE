import { cva } from 'class-variance-authority';

const button = cva(
  'rounded-[12px] bg-button-color h-[5.6rem] flex justify-center items-center',
  {
    variants: {
      size: {
        sm: 'w-[17.1rem]',
        lg: 'w-[35.3rem]',
      },
      textSize: {
        sm: 'title',
        lg: 'head1',
      },
      backgroundColor: {
        dark: 'bg-button-color',
        light: 'bg-background-02',
      },
      textColor: {
        black: 'text-black',
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

const Button = () => {
  return <button className={button()}>Button</button>;
};

export default Button;
