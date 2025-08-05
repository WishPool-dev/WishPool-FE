import Modal from '@/components/common/Modal';

const EditModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex w-[18.4rem] flex-col rounded-[12px] bg-white">
        <button className="text-text title3 px-[2.4rem] py-[1.8rem] text-left">
          위시풀 수정
        </button>
        <button className="text-error-color title3 px-[2.4rem] py-[1.8rem] text-left">
          위시풀 삭제
        </button>
      </div>
    </Modal>
  );
};

export default EditModal;
