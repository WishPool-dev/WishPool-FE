import BackHeader from '@/components/layout/Header/BackHeader';

const HistoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="위시풀 기록" bgColor="white" />
      <main className="bg-background-01 pt-[5.4rem] pb-[2rem]">{children}</main>
    </>
  );
};

export default HistoryLayout;
