import HomeHeader from '@/components/layout/Header/HomeHeader';

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader hasMenu bgColor="white" />
      <main className="mt-header flex flex-col items-center justify-center pt-[2rem] pb-[5rem]">
        {children}
      </main>
    </>
  );
}
