import Icon from '@/components/common/Icon';
import DetailFooter from '@/components/wishpool/viewer/detail/DetailFooter';
import getFooterContent from '@/utils/wishpool/viewer/getFooterContent';

const DetailPage = () => {
  const status = 'open';
  const footerProps = getFooterContent(status);
  if (!footerProps) return null;

  return (
    <>
      <img
        src="/images/wishpool-card.svg"
        width={430}
        height={240}
        className="w-full"
        alt="위시풀 대표 이미지"
      />
      <section className="text-text p-[2rem]">
        <div className="flex items-center justify-between">
          <span className="bg-background-02 caption2 rounded-[6px] px-[1.2rem] py-[0.6rem] text-gray-800">
            참여자 마감일 2025/06/23
          </span>
          <span className="caption2 text-blue-primary bg-background-02 flex items-center gap-[0.4rem] rounded-[4px] px-[1.2rem] py-[0.6rem]">
            <Icon
              name="birthday"
              className="text-blue-4 h-[1.6rem] w-[1.6rem]"
            />
            홍길동
          </span>
        </div>
        <div className="mt-[2rem]">
          <h2 className="head1 mb-[0.4rem]">홍길동에게 보내는 위시풀</h2>
          <span className="body1 flex items-center gap-[0.8rem]">
            3명 참여
            <Icon
              name="plus"
              className="h-[1.8rem] w-[1.8rem] rounded-[3px] bg-gray-400 text-white"
            />
          </span>
          <button
            type="button"
            className="title2 mt-[3.6rem] mb-[1.6rem] flex w-full items-center justify-center gap-[0.8rem] rounded-[10px] border border-gray-400 py-[1.4rem]"
          >
            <Icon name="gift" />
            <span>선물 리스트 보기</span>
          </button>
          <div className="bg-background-02 body2 flex gap-[1.2rem] rounded-[12px] p-[1.6rem]">
            <span className="shrink-0 text-gray-600">소개</span>
            <p className="text-gray-800">
              얘들아 길동이가 이번에 생일이더라고! <br /> 지난 학기에 성빈이가
              우리 팀에서 여러가지 일로 고생해줬으니 우리가 간단히라도 돈 모아서
              선물해주면 어떨까 싶어서! <br /> 위시풀로 성빈이 갖고싶은 것 보고
              구매해서 감동주자!
            </p>
          </div>
        </div>
      </section>
      <DetailFooter {...footerProps} />
    </>
  );
};

export default DetailPage;
