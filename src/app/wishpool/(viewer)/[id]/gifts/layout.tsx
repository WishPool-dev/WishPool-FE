import BackHeader from '@/components/layout/Header/BackHeader';

const GiftLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="선물 리스트" bgColor="white" />
      <main className="mx-[2rem] pt-[8.2rem]">{children}</main>
    </>
  );
};

export default GiftLayout;
