'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import Icon from '@/components/common/Icon';

export interface BasicHeaderProps {
  hasBackButton?: boolean;
  onClickBackButton?: () => void;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  centerText?: string;
  bgColor?: string;
}

const BasicHeader = ({
  hasBackButton = true,
  onClickBackButton,
  centerText,
  leftSlot,
  rightSlot,
  bgColor,
}: BasicHeaderProps) => {
  const router = useRouter();

  const handleBackButton = () => {
    if (onClickBackButton) onClickBackButton();
    else router.back();
  };
  const headerClasses = [
    'z-header',
    'fixed',
    'top-0',
    'right-0',
    'left-0',
    'mx-auto',
    'flex',
    'h-[5.4rem]',
    'max-w-[430px]',
    'items-center',
    'justify-between',
    'p-[2rem]',
    bgColor || 'bg-white',
  ].join(' ');

  return (
    <header className={headerClasses}>
      <div className="flex min-w-[24px] flex-1 items-center justify-start gap-2">
        {hasBackButton && (
          <button onClick={handleBackButton} aria-label="뒤로 가기">
            <Icon name="back" className="text-button-color" />
          </button>
        )}
        {leftSlot}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        {centerText && <p className="text-text title2">{centerText}</p>}
      </div>

      <div className="flex min-w-[24px] flex-1 items-center justify-end gap-2">
        {rightSlot}
      </div>
    </header>
  );
};

export default BasicHeader;
