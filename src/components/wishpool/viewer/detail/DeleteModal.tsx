import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';

const DeleteModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose}>
      <div className="w-[32.4rem] rounded-[16px] bg-white p-[1.6rem] text-center">
        <h3 className="text-text title1 mt-[1.2rem] mb-[0.8rem]">
          이 위시풀을 종료하고 삭제할까요?
        </h3>
        <p className="body2 text-gray-800">
          위시풀을 종료하면 다시 시작할 수 없어요.
        </p>
        <div className="mt-[2.8rem] flex gap-[1.2rem]">
          <Button
            textSize="md"
            textColor="black"
            backgroundColor="light"
            onClick={onClose}
          >
            취소
          </Button>
          <Button textSize="md" textColor="white">
            삭제
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
