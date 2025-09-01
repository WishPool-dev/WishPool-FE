import HomeHeader from '@/components/layout/Header/HomeHeader';

const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="background02" />
      <main className="bg-background-02 h-[100vh] px-[2rem] pt-[8.2rem] pb-[10rem]">
        {children}
      </main>
    </>
  );
};

export default IntroLayout;
