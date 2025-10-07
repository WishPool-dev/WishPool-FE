import HomeHeader from '@/components/layout/Header/HomeHeader';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader hasMenu bgColor="white" />
      <main className="bg-background-02 mt-header h-[100vh]">{children}</main>
    </>
  );
};

export default HomeLayout;
