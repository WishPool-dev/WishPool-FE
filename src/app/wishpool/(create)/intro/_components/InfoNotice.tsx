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
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
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

      {isOpen && (
        <div className="bg-background-02 caption2 rounded-b-[6px] p-[1.2rem] text-gray-800">
          <p className="caption2 text-gray-800">{accordionContent}</p>
        </div>
      )}
    </div>
  );
};
