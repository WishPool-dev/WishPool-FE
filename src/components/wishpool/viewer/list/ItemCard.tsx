import UserTag from '@/components/common/UserTag';

type ItemCardProps = {
  name: string;
  item: string;
};

const ItemCard = ({ name, item }: ItemCardProps) => {
  return (
    <>
      <div className="flex grow-1 flex-col">
        <img
          className="rounded-[12px] object-cover"
          src="/images/gift-card.svg"
          alt="상품 이미지"
        />

        <div className="mt-[0.8rem] flex items-center gap-[0.8rem]">
          <UserTag>참여자</UserTag>
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
