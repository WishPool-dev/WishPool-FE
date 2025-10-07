import Button from '@/components/common/Button';
import BaseModal from '@/components/common/Modal/BaseModal';

type CenterModalProps = {
  onClose: () => void;
  onSubmit?: () => void;
  modalTitle: string;
  modalContent?: string;
  leftText?: string;
  rightText: string;
};

const CenterModal = ({
  onClose,
  onSubmit,
  modalTitle,
  modalContent,
  leftText = '취소',
  rightText,
}: CenterModalProps) => {
  return (
    <BaseModal onClose={onClose} hasOverlay>
      <div className="absolute top-1/2 left-1/2 w-[32.4rem] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white p-[1.6rem] pt-[2.8rem] text-center">
        <h3 className="text-text title1">{modalTitle}</h3>
        {modalContent && (
          <p className="body2 mt-[0.8rem] text-gray-800">{modalContent}</p>
        )}
        <div className="mt-[2.8rem] flex gap-[1.2rem]">
          <Button
            textSize="md"
            textColor="black"
            backgroundColor="light"
            onClick={onClose}
          >
            {leftText}
          </Button>
          <Button textSize="md" textColor="white" onClick={onSubmit}>
            {rightText}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};

export default CenterModal;
