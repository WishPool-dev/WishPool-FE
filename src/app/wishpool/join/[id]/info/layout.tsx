import HomeHeader from '@/components/layout/Header/HomeHeader';

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="background02" />
      <main className="from-background-02 to-blue-5 mt-header min-h-[100vh] bg-gradient-to-b p-[2rem] pb-[15rem]">
        {children}
      </main>
    </>
  );
};

export default InfoLayout;
