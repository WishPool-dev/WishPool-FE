import Button from '@/components/common/Button';

const SelectPage = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <section className="bg-blue-5 grow-1"></section>
      <section className="bg-background-02 relative h-[41.4rem]">
        <div className="flex flex-col items-center py-[7.2rem]">
          <img
            src="/images/hole.svg"
            alt="구멍 이미지"
            className="mb-[4rem] h-[5.2rem] w-[20.3rem]"
          />
          <p className="text-text caption1">
            마음에 드는 선물을
            <span className="text-blue-primary">
              최대 3개까지
            </span> 남겨주세요. <br />
            아래로 드래그하면 리스트에서 제외돼요.
          </p>
        </div>
        <button className="title2 mx-auto block py-[1.6rem] text-gray-600 underline">
          처음부터 다시 고르기
        </button>
        <div className="absolute inset-x-0 bottom-0 m-[2rem]">
          <Button>완료하기</Button>
        </div>
      </section>
    </div>
  );
};

export default SelectPage;
