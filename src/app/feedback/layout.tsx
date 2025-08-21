import BackHeader from '@/components/layout/Header/BackHeader';

const FeedbackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="평가/피드백 하기" bgColor="white" />
      <main className="mx-[2rem] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default FeedbackLayout;
