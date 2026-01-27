import InfoNotice from '@/components/common/InfoBox/InfoNotice';

const INFO_MESSAGE = {
  infoTitle: 'WishpooL만의 위시풀 만들기란?',
  infoContent: [
    '위시풀은 참여자들이 생일자를 위해 각자의 선물을 제안하고,',
    '생일자가 그 중 원하는 상품을 고르는 공동 제작 위시리스트에요.',
  ],
};

export const INFO_NOTICE_LIST = [
  {
    title: '생일자는 진짜 필요한 선물을 고를 수 있어요.',
    content: (
      <>
        친구들이 제안한 선물 중에서 <br />
        생일자는 진짜 받고 싶은 걸 직접 선택할 수 있어요. <br />
        선물받는 입장에서 더 솔직하고, 편안한 방식이에요.
      </>
    ),
  },
  {
    title: '하나의 리스트, 여럿의 마음이 들어 있어요.',
    content: (
      <>
        친구들이 제안한 선물들이 하나의 위시리스트로 모여요. <br />
        위시리스트를 함께 만드는 과정도 축하의 일부가 되죠.
      </>
    ),
  },
];

const InfoBox = () => {
  return (
    <div className="bg-background-01 rounded-[16px] p-[2rem]">
      <h3 className="text-blue-primary title3 mb-[1.2rem]">
        {INFO_MESSAGE.infoTitle}
      </h3>
      <p className="caption2 mb-[2rem] text-gray-800">
        {INFO_MESSAGE.infoContent[0]} <br />
        {INFO_MESSAGE.infoContent[1]}
      </p>
      <div className="space-y-[1.2rem]">
        {INFO_NOTICE_LIST.map(({ title, content }, index) => (
          <InfoNotice key={index} accordionContent={content}>
            {title}
          </InfoNotice>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;
