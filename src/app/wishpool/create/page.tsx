import { InfoNotice } from '@/app/wishpool/create/_components/InfoNotice';

const page = () => {
  return (
    <>
      <div className="text-text mt-[2.8rem]">
        <p className="head1 mb-[0.4rem]">
          친구를 위한 선물 위시리스트, <br /> 위시풀을 함께 만들어보세요!
        </p>
        <p className="body1">단계별 항목에 응답해주세요.</p>
      </div>
      <img
        src="/images/sample.jpeg"
        alt="위시풀 생성 예시 사진"
        className="mx-auto my-[4.2rem] h-[18rem] w-[18rem] object-cover"
      />
      <div className="bg-background-02 rounded-[16px] p-[2rem]">
        <p className="text-blue-primary title3 mb-[1.2rem]">
          WishpooL만의 위시풀 만들기란?
        </p>
        <p className="caption2 text-gray-800">
          위시풀은 참여자들이 생일자를 위해 각자의 선물을 제안하고, <br />
          생일자가 그 중 원하는 상품을 고르는 공동 제작 위시리스트에요.
        </p>
        <div className="mt-[2rem] flex flex-col gap-[1.2rem]">
          <InfoNotice>생일자는 진짜 필요한 걸 고를 수 있어요.</InfoNotice>
          <InfoNotice>하나의 리스트, 여럿의 마음이 들어 있어요.</InfoNotice>
        </div>
      </div>
    </>
  );
};

export default page;
