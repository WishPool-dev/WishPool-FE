import Button from '@/components/common/Button';

export default function WishpoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative">{children}</section>
      <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[430px] px-[2rem]">
        <Button>다음</Button>
      </div>
    </>
  );
}
