'use client';

import { useRouter } from 'next/navigation';

import Icon from '@/components/common/Icon';
import CenterModal from '@/components/common/Modal/CenterModal';
import EditModal from '@/components/common/Modal/EditModal';
import type { HeaderColor } from '@/components/layout/Header/_types/HeaderColor';
import BaseHeader from '@/components/layout/Header/BaseHeader';
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
      {del.isOpen && (
        <CenterModal
          onClose={del.onClose}
          modalTitle="이 위시풀을 종료하고 삭제할까요?"
          modalContent="위시풀을 종료하면 다시 시작할 수 없어요."
          rightText="삭제"
        />
      )}
    </>
  );
};

export default BackMoreHeader;
