import { data } from '@/app/pick/list/data';
import GiftCard from '@/components/pick/list/GiftCard';

const ListPage = () => {
  return (
    <>
      <div className="body2 flex justify-between py-[1.6rem] text-white">
        <span>선물 리스트</span>
        <span>{data.length}개</span>
      </div>
      <section className="grid grid-cols-2 gap-[1.1rem]">
        {data.map(({ giftId, itemName, itemUrl }) => (
          <GiftCard
            key={giftId}
            giftId={giftId}
            itemName={itemName}
            itemUrl={itemUrl}
          />
        ))}
      </section>
    </>
  );
};

export default ListPage;
