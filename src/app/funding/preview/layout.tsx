import HomeHeader from '@/components/layout/Header/HomeHeader';

const PreviewPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="background02" />
      <main className="bg-background-02 mt-header p-[2rem] pb-[12rem]">
        {children}
      </main>
    </>
  );
};

export default PreviewPage;
