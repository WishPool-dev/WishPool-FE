import { data } from '@/app/funding/complete/data';
import GiftCard from '@/components/funding/list/GiftCard';
const CompletePage = () => {
  return (
    <div className="pt-[2.8rem]">
      <h1 className="text-blue-primary caption1">최종 점검</h1>
      <h2 className="head1 text-text">홍길동님이 최종 선택한 선물</h2>
      <section className="my-[2.8rem] space-y-[1.2rem]">
        {data.map(({ giftId, giftName, giftImage }) => (
          <GiftCard
            key={giftId}
            size="big"
            giftId={giftId}
            giftName={giftName}
            giftImage={giftImage}
          />
        ))}
      </section>
    </div>
  );
};

export default CompletePage;
