import BaseInput from '@/components/common/Form/BaseInput';
import Icon from '@/components/common/Icon';
import { FormFieldProps } from '@/types/wishpool/builder/Form';

const GiftField = ({ placeholder, maxLength }: FormFieldProps) => {
  const handleInputChange = () => {
    // TODO: 입력값 기능 추가
  };

  return (
    <>
      <div className="mt-[4rem] mb-[0.8rem] flex justify-between">
        <p className="subtitle2 text-text max-w-[430px]">선물 1</p>
        <button className="flex items-center justify-center" type="button">
          <Icon name="trash" width={20} height={20} />
        </button>
      </div>
      <BaseInput
        name=""
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleInputChange}
      />
      <div className="mt-[1.2rem]">
        <input
          placeholder="선물 판매 링크를 붙여넣기 해 주세요."
          type="url"
          name=""
          className="body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        />
      </div>
    </>
  );
};

export default GiftField;
