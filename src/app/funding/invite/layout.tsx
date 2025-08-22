import HomeHeader from '@/components/layout/Header/HomeHeader';

const InviteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="background02" />
      <main className="from-Background-02 to-blue-5 bg-gradient-to-b px-[2rem] pt-[5.4rem] pb-[15rem]">
        {children}
      </main>
    </>
  );
};

export default InviteLayout;
