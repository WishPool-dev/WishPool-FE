import React, { useState } from 'react';

import CalendarPicker from './CalendarPicker';

interface InputBoxProps {
  content?: string;
  placeholder?: string;
  maxLength?: number;
  calendar?: boolean;
  height?: string;
}

const InputBox = ({
  content,
  placeholder,
  maxLength,
  calendar,
  height = 'h-[5.6rem]',
}: InputBoxProps) => {
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
      <div className="subtitle2 text-text mb-[0.8rem] max-w-full">
        {content}
      </div>
      <div className="relative w-full">
        <textarea
          value={inputValue}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={handleInputChange}
          className={`body1 ${height} flex w-full rounded-[1.2rem] border-[0.1rem] border-gray-400 px-[1.6rem] py-[0.8rem] focus:border-gray-400 focus:outline-none`}
        />
        {maxLength && (
          <div className="caption2 absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem] text-gray-600">
            {inputValue.length}/{maxLength}
          </div>
        )}

        {calendar && (
          <div className="absolute top-[1.6rem] right-[1.6rem]">
            <CalendarPicker setValue={setInputValue} />
          </div>
        )}
      </div>
    </>
  );
};

export default InputBox;
