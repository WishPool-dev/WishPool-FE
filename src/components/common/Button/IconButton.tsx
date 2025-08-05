import { button } from '@/components/common/Button/Button.style';
import type { ButtonProps } from '@/types/common/buttonProps';

const IconButton = ({
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
      <div className="flex items-center gap-4">{children}</div>
    </button>
  );
};

export default IconButton;
