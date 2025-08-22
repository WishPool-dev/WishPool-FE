import { data } from '@/app/funding/list/data';
import GiftCard from '@/components/funding/list/GiftCard';

const ListPage = () => {
  return (
    <>
      <div className="body2 flex justify-between py-[1.6rem] text-white">
        <span>선물 리스트</span>
        <span>{data.length}개</span>
      </div>
      <section className="grid grid-cols-2 gap-[1.1rem]">
        {data.map(({ giftId, giftName, giftImage }) => (
          <GiftCard
            key={giftId}
            giftId={giftId}
            giftName={giftName}
            giftImage={giftImage}
          />
        ))}
      </section>
    </>
  );
};

export default ListPage;
