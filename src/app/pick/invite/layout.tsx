import HomeHeader from '@/components/layout/Header/HomeHeader';

const InviteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="background02" />
      <main className="from-background-02 to-blue-5 pt-header min-h-screen bg-gradient-to-b px-[2rem] pb-[21.6rem]">
        {children}
      </main>
    </>
  );
};

export default InviteLayout;
