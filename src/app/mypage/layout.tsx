import BackHeader from '@/components/layout/Header/BackHeader';

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="마이 페이지" bgColor="white" />
      <main className="bg-background-02 h-[100vh] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default MyPageLayout;
