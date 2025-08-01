import HomeHeader from '@/components/layout/Header/HomeHeader';

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader hasMenu />
      <main className="flex flex-col items-center justify-center pt-[8.2rem]">
        {children}
      </main>
    </>
  );
}
