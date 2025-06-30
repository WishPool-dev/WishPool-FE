const ItemCard = () => {
  return (
    <>
      <div className="flex h-[27.1rem] w-[17.1rem] flex-col">
        <div className="relative">
          <img
            className="top-0 left-0 rounded-xl"
            src="https://placehold.co/171x171"
          />
        </div>
        <div className="mt-2 flex gap-x-2">
          <div className="flex h-[2.3rem] w-[4.7rem] items-center justify-center rounded-sm bg-black px-2 py-1">
            <div className="caption1 flex text-white">참여자</div>
          </div>
          <div className="subtitle3 flex items-center justify-center">이름</div>
        </div>

        <div className="pt-3">
          <div className="title2">선물 이름</div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
