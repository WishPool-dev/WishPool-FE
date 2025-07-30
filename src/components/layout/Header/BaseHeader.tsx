type BaseHeaderProps = {
  leftSlot?: React.ReactNode;
  centerSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

const BaseHeader = ({ leftSlot, centerSlot, rightSlot }: BaseHeaderProps) => {
  return (
    <header>
      <div>{leftSlot}</div>
      <div>{centerSlot}</div>
      <div>{rightSlot}</div>
    </header>
  );
};

export default BaseHeader;
