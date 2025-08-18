import { useState } from 'react';

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maxLength?: number;
}

const BaseInput = ({ maxLength, placeholder }: InputBoxProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          value={inputValue}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={handleInputChange}
          className={`body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none`}
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

export default BaseInput;
