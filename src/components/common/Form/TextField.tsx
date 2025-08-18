import { useState } from 'react';

import { FormFieldProps } from '@/types/wishpool/builder/Form';

const TextField = ({ label, maxLength, placeholder }: FormFieldProps) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">{label}</p>
      <div className="relative w-full">
        <textarea
          maxLength={maxLength}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="body1 flex h-[15rem] w-full resize-none rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.5rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        />
        {maxLength && (
          <div className="caption2 absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem] text-gray-600">
            {inputValue.length}/{maxLength}
          </div>
        )}
      </div>
    </>
  );
};

export default TextField;
