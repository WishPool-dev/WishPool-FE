'use client';

import clsx from 'clsx';

import type { PlanType } from '@/types/common/planType';

type PlanTypeSectionProps = {
  planType: PlanType;
  onSelectType: (type: PlanType) => void;
  planCount: Record<PlanType, number>;
};

const PLAN_OPTIONS: { key: PlanType; label: string }[] = [
  { key: 'funding', label: '선물 펀딩(준비 중)' },
  { key: 'wishpool', label: '위시풀' },
];

const PlanTypeSection = ({
  planType,
  onSelectType,
  planCount,
}: PlanTypeSectionProps) => {
  return (
    <div className="bg-background-01 relative flex items-center justify-center gap-[1.2rem]">
      <div className="absolute bottom-0 left-0 h-[0.3rem] w-full bg-gray-100" />
      <div
        className={clsx(
          'bg-blue-2 absolute bottom-0 h-[0.3rem] transition-all duration-200',
          {
            'left-0 w-[50%] rounded-r-[100px]': planType === 'funding',
            'left-[50%] w-[50%] rounded-l-[100px]': planType === 'wishpool',
          },
        )}
      />

      {PLAN_OPTIONS.map(({ key, label }) => {
        const isActive = planType === key;

        return (
          <button
            key={key}
            onClick={() => {
              if (key !== 'funding') onSelectType(key);
            }}
            disabled={key === 'funding'}
            className={clsx(
              'title1 z-planType relative flex h-[4.6rem] w-[17.1rem] items-center justify-center gap-[0.4rem]',
              {
                'text-text': isActive,
                'text-gray-400': !isActive,
              },
            )}
          >
            {label}
            {planCount[key] > 0 && (
              <span
                className={clsx(
                  'caption3 bg-pink-primary flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full text-center text-white',
                  { 'pr-[0.1rem]': planCount[key] === 1 },
                )}
              >
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
