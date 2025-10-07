import HomeHeader from '@/components/layout/Header/HomeHeader';

const InviteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader />
      <main className="from-Background-02 to-blue-5 pt-header h-[100vh] bg-gradient-to-b px-[2rem]">
        {children}
      </main>
    </>
  );
};

export default InviteLayout;
