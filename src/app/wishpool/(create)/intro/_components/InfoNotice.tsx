'use client';

import { useState } from 'react';

import Icon from '@/components/common/Icon';

export const InfoNotice = ({
  children,
  accordionContent,
}: {
  children: React.ReactNode;
  accordionContent?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`bg-blue-6 flex items-center py-[0.4rem] pr-[0.6rem] pl-[1.2rem] ${isOpen ? 'rounded-t-[6px]' : 'rounded-[6px]'}`}
        onClick={toggleAccordion}
      >
        <Icon name="gift" title="선물 아이콘" className="text-white" />
        <p className="text-blue-primary caption1 ml-[1.2rem]">{children}</p>
        <Icon
          name={isOpen ? 'up' : 'down'}
          title={isOpen ? '아래 방향 아이콘' : '위 방향 아이콘'}
          className="text-blue-primary ml-auto"
        />
      </div>
      <div
        className={`overflow-hidden transition-all ${isOpen ? 'max-h-[500px]' : 'max-h-0'} `}
      >
        <div className="bg-background-02 rounded-b-[6px] p-[1.2rem]">
          {accordionContent}
        </div>
      </div>
    </>
  );
};
