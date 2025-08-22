import HomeHeader from '@/components/layout/Header/HomeHeader';

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader bgColor="white" />
      <main className="flex flex-col items-center justify-center pt-[8.2rem] pb-[5rem]">
        {children}
      </main>
    </>
  );
}
