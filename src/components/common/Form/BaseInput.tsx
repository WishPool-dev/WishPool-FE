'use client';

import { useState, useEffect } from 'react';

import { FormFieldProps } from '@/types/wishpool/builder/Form';

const BaseInput = ({
  name,
  placeholder,
  maxLength,
  defaultValue,
}: FormFieldProps) => {
  const limit = typeof maxLength === 'number' ? maxLength : undefined;

  //제어 컴포넌트 상태
  const [val, setVal] = useState(defaultValue ?? '');

  useEffect(() => {
    setVal(String(defaultValue));
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = limit ? e.target.value.slice(0, limit) : e.target.value;
    setVal(text);
    sessionStorage.setItem(`wishpool_${name}`, text);
  };

  return (
    <>
      <div className="relative w-full">
        <input
          name={name}
          type="text"
          value={val}
          placeholder={placeholder}
          maxLength={limit}
          onChange={handleChange}
          className="body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        />
        {limit && (
          <div className="caption2 absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem] text-gray-600">
            {val.length}/{limit}
          </div>
        )}
      </div>
    </>
  );
};
export default BaseInput;
