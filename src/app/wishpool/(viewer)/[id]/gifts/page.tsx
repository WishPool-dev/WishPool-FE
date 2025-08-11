import ItemCard from '@/components/wishpool/viewer/list/ItemCard';
const numberOfFriends = 4;
const giftItems = [
  { id: 1, name: '김이름', gift: '선물 이름' },
  { id: 2, name: '김이름', gift: '선물 이름' },
  { id: 3, name: '김이름', gift: '선물 이름' },
  { id: 4, name: '김이름', gift: '선물 이름' },
  { id: 5, name: '김이름', gift: '선물 이름' },
  { id: 6, name: '김이름', gift: '선물 이름' },
  { id: 7, name: '김이름', gift: '선물 이름' },
];

const page = () => {
  return (
    <>
      <div className="head1 text-text mb-[2.4rem] pt-[0.4rem]">
        현재까지 총 <span>{numberOfFriends}</span>명의 친구가 <br />
        <span className="text-blue-primary">홍길동</span>님을 위한 선물 리스트를
        만들어 줬어요.
      </div>
      <section>
        <div className="body2 flex items-center justify-between">
          <span className="text-text">선물 리스트</span>
          <span className="text-blue-primary">{giftItems.length}개</span>
        </div>
        <div className="mt-[1.6rem] grid grid-cols-2 gap-x-[1.2rem] gap-y-[1.6rem]">
          {giftItems.map((item) => (
            <ItemCard key={item.id} name={item.name} item={item.gift} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
