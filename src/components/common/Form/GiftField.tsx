import BaseInput from '@/components/common/Form/BaseInput';
import Icon from '@/components/common/Icon';
import { FormFieldProps } from '@/types/wishpool/builder/Form';

const GiftField = ({ label, placeholder, maxLength }: FormFieldProps) => {
  return (
    <>
      <div className="mb-[0.8rem] flex justify-between">
        <p className="subtitle2 text-text max-w-[430px]">{label}</p>
        <button className="flex items-center justify-center" type="button">
          <Icon name="trash" width={20} height={20} />
        </button>
      </div>
      <BaseInput placeholder={placeholder} maxLength={maxLength} />
      <div className="mt-[1.2rem]">
        <BaseInput
          placeholder="선물 판매 링크를 붙여넣기 해 주세요."
          // type="url"
        />
      </div>
    </>
  );
};

export default GiftField;
