import TextHeader from '@/components/layout/Header/TextHeader';

const CompleteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextHeader title="친구에게 보내는 위시풀" bgColor="white" />
      <main className="bg-background-01 px-[2rem] pt-[5.4rem] pb-[2rem]">
        {children}
      </main>
    </>
  );
};

export default CompleteLayout;
