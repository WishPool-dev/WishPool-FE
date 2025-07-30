type BaseHeaderProps = {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

const BaseHeader = ({ leftSlot, centerSlot, rightSlot }: BaseHeaderProps) => {
  return (
    <header className="z-header fixed top-0 right-0 left-0 mx-auto flex h-[5.4rem] max-w-[430px] items-center justify-between bg-white p-[2rem]">
      <div>{leftSlot}</div>
      <div>{centerSlot}</div>
      <div>{rightSlot}</div>
    </header>
  );
};

export default BaseHeader;
