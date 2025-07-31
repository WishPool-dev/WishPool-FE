'use client';

import { useRouter } from 'next/navigation';

import Icon from '@/components/common/Icon';
import BaseHeader from '@/components/layout/Header/BaseHeader';

type BackMoreHeaderProps = {
  title: string;
  onBack?: () => void;
  onMoreClick?: () => void;
};

const BackMoreHeader = ({
  title,
  onBack,
  onMoreClick,
}: BackMoreHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  return (
    <BaseHeader
      leftSlot={
        <button aria-label="이전 버튼" onClick={handleBack}>
          <Icon name="back" title="이전 아이콘" />
        </button>
      }
      centerSlot={<h1 className="title2 text-text text-center">{title}</h1>}
      rightSlot={
        <button aria-label="더보기 버튼" onClick={onMoreClick}>
          <Icon name="more" title="더보기 아이콘" />
        </button>
      }
    />
  );
};

export default BackMoreHeader;
