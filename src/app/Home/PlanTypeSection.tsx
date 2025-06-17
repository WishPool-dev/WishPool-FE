'use client';

type PlanType = 'funding' | 'wishpool';

type planTypeProps = {
  planType: PlanType;
  onSelectType: (type: PlanType) => void;
};

const planCount = {
  funding: 1,
  wishpool: 0,
};

const PlanTypeSection = ({ planType, onSelectType }: planTypeProps) => {
  return (
    <>
      <div className="relative m-auto flex w-[35.4rem] items-center justify-center gap-[1.2rem] after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:bg-gray-100 after:content-['']">
        <button
          onClick={() => onSelectType('funding')}
          className={`title1 z-planType relative flex h-[4.6rem] w-[17.1rem] items-center justify-center gap-[0.4rem] after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:content-[""] ${planType === 'funding' ? 'text-text after:bg-blue-2 after:rounded-r-[100px]' : 'text-gray-400'}`}
        >
          선물 펀딩
          {planCount.funding > 0 && (
            <span className="bg-pink-primary caption3 flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full text-white">
              {planCount.funding}
            </span>
          )}
        </button>
        <button
          onClick={() => onSelectType('wishpool')}
          className={`title1 z-planType relative flex h-[4.6rem] w-[17.1rem] items-center justify-center gap-[0.4rem] after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:content-[""] ${planType === 'wishpool' ? 'text-text after:bg-blue-2 after:rounded-r-[100px]' : 'text-gray-400'}`}
        >
          위시풀
          {planCount.wishpool > 0 && (
            <span className="bg-pink-primary caption3 flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full text-white">
              {planCount.wishpool}
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default PlanTypeSection;
