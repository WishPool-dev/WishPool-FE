import type { HeaderColor } from '@/components/layout/Header/_types/HeaderColor';
import BaseHeader from '@/components/layout/Header/BaseHeader';

type TextHeaderProps = {
  title: string;
  bgColor?: HeaderColor;
};

const TextHeader = ({ title, bgColor }: TextHeaderProps) => {
  return (
    <BaseHeader
      centerSlot={<h1 className="title2 text-text text-center">{title}</h1>}
      bgColor={bgColor}
    />
  );
};

export default TextHeader;
