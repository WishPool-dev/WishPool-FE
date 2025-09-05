import BackHeader from '@/components/layout/Header/BackHeader';

const EditLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="위시풀 수정" bgColor="white" />
      <main className="mt-header">{children}</main>
    </>
  );
};

export default EditLayout;
