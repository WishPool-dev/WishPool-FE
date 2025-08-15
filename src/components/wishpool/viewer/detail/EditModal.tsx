'use client';

import { useParams, useRouter } from 'next/navigation';

import Modal from '@/components/common/Modal';
import { PATH } from '@/constants/common/path';

type EditModalProps = {
  onClose: () => void;
  onOpenDelete: () => void;
};

const EditModal = ({ onClose, onOpenDelete }: EditModalProps) => {
  const router = useRouter();

  const { id } = useParams<{ id: string }>();
  const wishpoolId = Number(id);

  return (
    <>
      <Modal onClose={onClose}>
        <div className="absolute top-[5.4rem] right-[2rem] flex w-[18.4rem] flex-col rounded-[12px] bg-white">
          <button
            onClick={() => router.push(PATH.WISHPOOL_EDIT(wishpoolId))}
            className="text-text title3 px-[2.4rem] py-[1.8rem] text-left"
          >
            위시풀 수정
          </button>
          <button
            onClick={onOpenDelete}
            className="text-error-color title3 px-[2.4rem] py-[1.8rem] text-left"
          >
            위시풀 삭제
          </button>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
