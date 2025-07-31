type BaseHeaderProps = {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

const BaseHeader = ({ leftSlot, centerSlot, rightSlot }: BaseHeaderProps) => {
  return (
    <header className="z-header fixed inset-0 mx-auto flex h-[5.4rem] max-w-[430px] items-center justify-between p-[2rem]">
      <div>{leftSlot}</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {centerSlot}
      </div>
      <div>{rightSlot}</div>
    </header>
  );
};

export default BaseHeader;
