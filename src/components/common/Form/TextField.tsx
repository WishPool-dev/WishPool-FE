'use client';
import { useState, useEffect } from 'react';

import { FormFieldProps } from '@/types/wishpool/builder/Form';

const TextField = ({
  name,
  placeholder,
  maxLength,
  defaultValue,
}: FormFieldProps) => {
  const limit = typeof maxLength === 'number' ? maxLength : undefined;

  const [val, setVal] = useState(defaultValue ?? '');

  useEffect(() => {
    setVal(String(defaultValue));
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = limit ? e.target.value.slice(0, limit) : e.target.value;
    setVal(text);
    sessionStorage.setItem(`wishpool_${name}`, text);
  };
  return (
    <>
      <div className="relative w-full">
        <textarea
          name={name}
          maxLength={maxLength}
          value={val}
          onChange={handleChange}
          placeholder={placeholder}
          className="body1 flex h-[15rem] w-full resize-none rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.5rem] pb-[3rem] whitespace-pre-line placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
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

export default TextField;
