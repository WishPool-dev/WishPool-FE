'use client';
import { FormFieldProps } from '@/types/wishpool/builder/FormFieldPropsType';

type BaseInputProps = FormFieldProps & {
  value?: string;
  onChange: (name: string, value: string) => void;
};

const BaseInput = ({
  name,
  placeholder,
  maxLength,
  value,
  onChange,
}: BaseInputProps) => {
  const limit = typeof maxLength === 'number' ? maxLength : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = limit ? e.target.value.slice(0, limit) : e.target.value;

    onChange(name, text);
    sessionStorage.setItem(`wishpool_${name}`, text);
  };

  const currentVal = value ?? '';

  return (
    <>
      <div className="relative w-full">
        <input
          name={name}
          type="text"
          value={currentVal}
          placeholder={placeholder}
          maxLength={limit}
          onChange={handleChange}
          className="body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        />
        {limit && (
          <div className="caption2 absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem] text-gray-600">
            {currentVal.length}/{limit}
          </div>
        )}
      </div>
    </>
  );
};
export default BaseInput;
