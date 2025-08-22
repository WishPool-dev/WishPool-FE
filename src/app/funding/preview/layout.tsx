import HomeHeader from '@/components/layout/Header/HomeHeader';

const CompleteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="background02" />
      <main className="bg-background-02 px-[2rem] pt-[5.4rem] pb-[2rem]">
        {children}
      </main>
    </>
  );
};

export default CompleteLayout;
