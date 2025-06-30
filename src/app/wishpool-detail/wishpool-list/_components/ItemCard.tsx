const ItemCard = () => {
  return (
    <>
      <div className="flex h-[27.1rem] w-[17.1rem] flex-col">
        <div className="relative">
          <img
            className="top-0 left-0 rounded-[12px]"
            src="https://placehold.co/171x171"
          />
        </div>
        <div className="mt-[0.8rem] flex gap-[0.8rem]">
          <div className="flex h-[2.3rem] w-[4.7rem] items-center justify-center rounded-[4px] bg-black px-[0.8rem] py-[0.4rem]">
            <div className="caption1 flex text-white">참여자</div>
          </div>
          <div className="subtitle3 flex items-center justify-center">이름</div>
        </div>

        <div className="pt-[1.2rem]">
          <div className="title2">선물 이름</div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
