type ItemCardProps = {
  name: string;
  item: string;
};

const ItemCard = ({ name, item }: ItemCardProps) => {
  return (
    <>
      <div className="flex max-h-[27.1rem] max-w-[17.1rem] flex-col">
        <img
          className="h-[17.1rem] w-[17.1rem] rounded-[12px] object-cover"
          src="/images/sample.jpeg"
        />

        <div className="mt-[0.8rem] flex items-center gap-[0.8rem]">
          <div className="bg-button-color caption1 flex h-[2.3rem] w-[4.7rem] items-center justify-center rounded-[4px] px-[0.8rem] py-[0.4rem] text-white">
            참여자
          </div>
          <div className="subtitle3">{name}</div>
        </div>

        <div className="pt-[1.2rem]">
          <div className="title2 line-clamp-2 h-[4.8rem]">{item}</div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
