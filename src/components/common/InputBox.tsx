import { useState } from 'react';

interface InputBoxProps {
  placeholder?: string;
  maxLength?: number;
  height?: string;
}

const InputBox = ({ placeholder, maxLength, height }: InputBoxProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      setInputValue(e.target.value.slice(0, maxLength));
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <>
      <div className="relative w-full">
        <textarea
          value={inputValue}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={handleInputChange}
          className={`body1 ${height} flex w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.5rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none`}
          // 피그마에는 1.6rem인데 1.5로해야 드래그가 안생김
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

export default InputBox;
