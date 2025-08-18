import BaseInput from '@/components/common/Form/BaseInput';
import { FormFieldProps } from '@/types/wishpool/builder/Form';

const BasicInputField = ({ label, placeholder, maxLength }: FormFieldProps) => {
  return (
    <>
      <div className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
        {label}
      </div>
      <div className="relative w-full">
        <BaseInput maxLength={maxLength} placeholder={placeholder} />
      </div>
    </>
  );
};

export default BasicInputField;
