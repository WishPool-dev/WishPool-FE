type CarouselCardProps = {
  index: number;
  activeIndex: number;
  giftName: string;
  giftImage: string;
};

const CarouselCard = ({
  index,
  activeIndex,
  giftName,
  giftImage,
}: CarouselCardProps) => {
  const isActive = index === activeIndex;

  return (
    <div
      data-card
      className={[
        'flex h-[29rem] w-[18rem] shrink-0 snap-center flex-col items-center',
        'gap-[2.4rem] rounded-[16px] border-[4px] px-[2rem] pt-[4rem]',
        'transition-all duration-300 ease-out will-change-transform',
        isActive
          ? 'from-blue-3 to-blue-2 translate-y-[2.4rem] border-white bg-gradient-to-b shadow-lg'
          : 'bg-background-01 translate-y-0 border-transparent',
      ].join(' ')}
    >
      <img
        src={giftImage}
        alt="선물 카드 이미지"
        className="h-[13.3rem] w-[13.3rem] rounded-[12px] transition-all duration-300"
      />
      <span
        className={[
          'subtitle2 line-clamp-2 h-[4.8rem] text-center',
          isActive ? 'text-white' : 'text-gray-600',
        ].join(' ')}
      >
        {giftName}
      </span>
    </div>
  );
};

export default CarouselCard;
