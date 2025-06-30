'use client';

import type { PlanType } from '@/types/planType';

type PlanTypeSectionProps = {
  planType: PlanType;
  onSelectType: (type: PlanType) => void;
  planCount: Record<PlanType, number>;
};

const PLAN_OPTIONS: { key: PlanType; label: string }[] = [
  { key: 'funding', label: '선물 펀딩' },
  { key: 'wishpool', label: '위시풀' },
];

const PlanTypeSection = ({
  planType,
  onSelectType,
  planCount,
}: PlanTypeSectionProps) => {
  return (
    <div className="relative m-auto flex w-[35.4rem] items-center justify-center gap-[1.2rem] after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:bg-gray-100 after:content-['']">
      {PLAN_OPTIONS.map(({ key, label }) => {
        const isActive = planType === key;

        return (
          <button
            key={key}
            onClick={() => onSelectType(key)}
            className={`title1 z-planType relative flex h-[4.6rem] w-[17.1rem] items-center justify-center gap-[0.4rem] after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:content-[''] ${
              isActive
                ? `text-text after:bg-blue-2 ${key === 'funding' ? 'after:rounded-r-[100px]' : 'after:rounded-l-[100px]'}`
                : 'text-gray-400'
            }`}
          >
            {label}
            {planCount[key] > 0 && (
              <span className="caption3 bg-pink-primary flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full text-center text-white">
                {planCount[key]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default PlanTypeSection;
