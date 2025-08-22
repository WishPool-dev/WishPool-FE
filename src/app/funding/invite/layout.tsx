import HomeHeader from '@/components/layout/Header/HomeHeader';

const InviteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader />
      <main className="from-Background-02 to-blue-5 h-[100vh] bg-gradient-to-b px-[2rem] pt-[5.4rem]">
        {children}
      </main>
    </>
  );
};

export default InviteLayout;
