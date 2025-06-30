import ItemCard from './_components/ItemCard';

const numberOfFriends = 4;
const numberOfGifts = 4;
const giftItems = [
  { id: 1, name: '김이름', gift: '선물 이름' },
  { id: 2, name: '김이름', gift: '선물 이름' },
  { id: 3, name: '김이름', gift: '선물 이름' },
  { id: 4, name: '김이름', gift: '선물 이름' },
];

const page = () => {
  return (
    <>
      <div className="text-text text-left">
        <div className="head1 py-[0.4rem]">위시풀 만들기 </div>
        <div className="body2 pt-[0.4rem]">
          현재까지 총 <span>{numberOfFriends}</span>명의 친구가 <br /> 생일자를
          위한 선물 리스트를 만들어 줬어요.
        </div>
      </div>
      <div className="body2 flex flex-row justify-between pt-[2rem]">
        <span className="text-text">선물 리스트</span>
        <span className="text-blue-primary">{numberOfGifts}개</span>
      </div>

      <div className="mt-[1.6rem] grid grid-cols-2 justify-items-center gap-x-[1.1rem] gap-y-[1.6rem]">
        {giftItems.map((item) => (
          <ItemCard key={item.id} name={item.name} item={item.gift} />
        ))}
      </div>
    </>
  );
};

export default page;
