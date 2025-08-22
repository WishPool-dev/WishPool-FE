import Image from 'next/image';

const PreviewPage = () => {
  return (
    <>
      <div className="mt-[2.8rem] flex flex-col items-center">
        <h3 className="text-text head1">위시풀 만들기 참여가 끝났어요!</h3>
        <p className="text-text body1 mt-[0.4rem]">
          홍길동님이 분명 좋아할거에요!
        </p>
      </div>

      <div className="mt-[3.8rem] flex items-center justify-center">
        <Image
          src="/images/join-complete.svg"
          alt="위시풀 공유 완료 일러스트"
          width={180}
          height={180}
        />
      </div>
    </>
  );
};

export default PreviewPage;
