import type { HeaderColor } from '@/components/layout/Header/_types/HeaderColor';

type BaseHeaderProps = {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  bgColor?: HeaderColor;
};

const bgColorMap: Record<HeaderColor, string> = {
  white: 'bg-white',
  transparent: 'bg-transparent',
  background02: 'bg-background-02',
  background01: 'bg-background-01',
};

const BaseHeader = ({
  leftSlot,
  centerSlot,
  rightSlot,
  bgColor = 'transparent',
}: BaseHeaderProps) => {
  return (
    <header
      className={`z-header fixed inset-0 mx-auto flex h-[5.4rem] max-w-[430px] items-center justify-between p-[2rem] ${bgColorMap[bgColor]}`}
    >
      <div>{leftSlot}</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {centerSlot}
      </div>
      <div>{rightSlot}</div>
    </header>
  );
};

export default BaseHeader;
