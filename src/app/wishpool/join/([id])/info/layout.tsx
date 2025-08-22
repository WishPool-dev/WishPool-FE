import HomeHeader from '@/components/layout/Header/HomeHeader';

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader />
      <main className="from-Background-02 to-blue-5 h-[100vh] bg-gradient-to-b px-[2rem] pt-[8.2rem]">
        {children}
      </main>
    </>
  );
};

export default InfoLayout;
