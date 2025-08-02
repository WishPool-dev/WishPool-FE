import RightIconHeader from '@/components/layout/Header/RightIconHeader';

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RightIconHeader iconName="cancel" title="위시풀 만들기" />
      <main className="bg-background-02 h-[100vh] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default CreateLayout;
