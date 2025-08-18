import Icon from '@/components/common/Icon';

const ThumbnailField = () => {
  return (
    <>
      <div className="relative mt-[4rem] h-[18.7rem] w-full rounded-[12px] border border-gray-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[0.9rem]">
          <Icon name="photo" className="text-gray-400" />
          <span className="subtitle3 text-gray-600">썸네일 이미지</span>
        </div>
      </div>

      <button className="subtitle2 text-text mt-[2.3rem] flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]">
        <Icon
          name="photo"
          className="items-center text-gray-600"
          width={24}
          height={24}
        />
        사진 추가
      </button>
      <button className="subtitle2 text-text flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]">
        <Icon name="camera" width={24} height={24} />
        사진 촬영
      </button>
    </>
  );
};

export default ThumbnailField;
