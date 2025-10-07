import BackHeader from '@/components/layout/Header/BackHeader';

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="마이 페이지" bgColor="white" />
      <main className="bg-background-02 mt-header h-[100vh]">{children}</main>
    </>
  );
};

export default MyPageLayout;
