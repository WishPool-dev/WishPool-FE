import DetailHeader from '@/components/layout/Header/DetailHeader';

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DetailHeader title="위시풀" />
      <main className="pb-[10rem]">{children}</main>
    </>
  );
};

export default DetailLayout;
