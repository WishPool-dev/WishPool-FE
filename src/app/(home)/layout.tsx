import HomeHeader from '@/components/layout/Header/HomeHeader';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader hasMenu bgColor="white" />
      <main className="bg-background-02 h-[100vh] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default HomeLayout;
