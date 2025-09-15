import BackHeader from '@/components/layout/Header/BackHeader';

const FeedbackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="평가/피드백 하기" bgColor="white" />
      <main className="mt-header p-[2rem]">{children}</main>
    </>
  );
};

export default FeedbackLayout;
