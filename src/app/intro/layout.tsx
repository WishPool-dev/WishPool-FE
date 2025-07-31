import HomeHeader from '@/components/layout/Header/HomeHeader';

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader hasMenu />
      <main>{children}</main>
    </>
  );
}
