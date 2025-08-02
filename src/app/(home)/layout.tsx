import HomeHeader from '@/components/layout/Header/HomeHeader';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader hasMenu bgColor="white" />
      <main className="flex flex-col items-center justify-center pt-[8.2rem]">
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
