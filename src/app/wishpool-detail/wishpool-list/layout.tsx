import Button from '@/components/common/Button';

export default function WishpoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative">{children}</section>
      <div className="fixed right-0 bottom-0 left-0 mx-auto h-[15.7rem] max-w-[43rem] overflow-hidden bg-gradient-to-b from-white/0 to-white px-[2rem] pt-[8.6rem] pb-[2rem]">
        <Button>다음</Button>
      </div>
    </>
  );
}
