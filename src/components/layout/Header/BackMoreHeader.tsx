'use client';

import { useRouter } from 'next/navigation';

import Icon from '@/components/common/Icon';
import type { HeaderColor } from '@/components/layout/Header/_types/HeaderColor';
import BaseHeader from '@/components/layout/Header/BaseHeader';
import DeleteModal from '@/components/wishpool/viewer/detail/DeleteModal';
import EditModal from '@/components/wishpool/viewer/detail/EditModal';
import useModal from '@/hooks/common/useModal';

type BackMoreHeaderProps = {
  title: string;
  onBack?: () => void;
  bgColor?: HeaderColor;
};

const BackMoreHeader = ({ title, onBack, bgColor }: BackMoreHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  const edit = useModal();
  const del = useModal();

  const handleOpenDelete = () => {
    edit.onClose();
    del.onOpen();
  };

  return (
    <>
      <BaseHeader
        leftSlot={
          <button aria-label="이전 버튼" onClick={handleBack}>
            <Icon name="back" title="이전 아이콘" />
          </button>
        }
        centerSlot={<h1 className="title2 text-text text-center">{title}</h1>}
        rightSlot={
          <button aria-label="더보기 버튼" onClick={edit.onOpen}>
            <Icon name="more" title="더보기 아이콘" />
          </button>
        }
        bgColor={bgColor}
      />
      {edit.isOpen && (
        <EditModal onClose={edit.onClose} onOpenDelete={handleOpenDelete} />
      )}
      {del.isOpen && <DeleteModal onClose={del.onClose} />}
    </>
  );
};

export default BackMoreHeader;
