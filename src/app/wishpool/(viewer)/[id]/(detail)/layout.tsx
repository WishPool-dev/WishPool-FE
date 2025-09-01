import BackMoreHeader from '@/components/layout/Header/BackMoreHeader';

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackMoreHeader title="위시풀" />
      <main className="pb-[10rem]">{children}</main>
    </>
  );
};

export default DetailLayout;
