import HomeHeader from '@/components/layout/Header/HomeHeader';

const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="background02" />
      <main className="bg-background-02 mt-header min-h-[100vh] p-[2rem] pb-[10rem]">
        {children}
      </main>
    </>
  );
};

export default IntroLayout;
