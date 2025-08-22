'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import giftBox from '@/assets/images/intro-empty-box.png';
import Button from '@/components/common/Button';
import ItemCard from '@/components/wishpool/viewer/list/ItemCard';
import { PATH } from '@/constants/common/path';

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

const GiftList = (
  <section>
    <div className="mt-[1.6rem] grid grid-cols-2 gap-x-[1.2rem] gap-y-[1.6rem]">
      {giftItems.map((item) => (
        <ItemCard key={item.id} name={item.name} item={item.gift} />
      ))}
    </div>
  </section>
);

const EmptyList = (
  <section className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[0.4rem]">
    <Image
      src={giftBox}
      alt="선물 박스 사진"
      width={180}
      height={180}
      className="block"
    />
    <p className="title1 text-text text-center">
      선물 리스트가 아직 도착하지 않았어요!
    </p>
  </section>
);

const GiftPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="head1 text-text mb-[2.4rem] pt-[2.8rem]">
        현재까지 총 <span>{numberOfFriends}</span>명의 친구가 <br />
        <span className="text-blue-primary">홍길동</span>님을 위한 선물 리스트를
        만들어 줬어요.
      </div>
      <div className="body2 flex items-center justify-between">
        <span className="text-text">선물 리스트</span>
        <span className="text-blue-primary">{giftItems.length}개</span>
      </div>
      {giftItems.length > 0 ? GiftList : EmptyList}

      <div className="fixed inset-x-0 bottom-0">
        <div className="mx-auto w-full max-w-[430px] p-[2rem]">
          <Button
            onClick={() => {
              router.push(PATH.JOIN_NAME);
            }}
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
};

export default GiftPage;
