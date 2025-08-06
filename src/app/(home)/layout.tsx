import HomeHeader from '@/components/layout/Header/HomeHeader';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader hasMenu bgColor="white" />
      <main className="mx-[2rem] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default HomeLayout;
