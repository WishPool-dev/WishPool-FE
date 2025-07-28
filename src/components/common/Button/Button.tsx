import { button } from '@/components/common/Button/Button.style';
import type { ButtonProps } from '@/types/buttonProps';

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
