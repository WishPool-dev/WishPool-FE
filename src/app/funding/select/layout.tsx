import RightIconHeader from '@/components/layout/Header/RightIconHeader';

const SelectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RightIconHeader title="선물 고르기" iconName="grid" />
      <main>{children}</main>
    </>
  );
};

export default SelectLayout;
