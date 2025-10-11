import { FormFieldProps } from '@/types/wishpool/builder/FormFieldPropsType';

type TextFieldProps = FormFieldProps & {
  value?: string;
  onChange: (name: string, value: string) => void;
};

const TextField = ({
  name,
  placeholder,
  maxLength,
  value,
  onChange,
}: TextFieldProps) => {
  const limit = typeof maxLength === 'number' ? maxLength : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = limit ? e.target.value.slice(0, limit) : e.target.value;
    onChange(name, text);
    sessionStorage.setItem(`wishpool_${name}`, text);
  };

  const currentVal = value ?? '';

  return (
    <>
      <div className="relative w-full">
        <textarea
          name={name}
          maxLength={maxLength}
          value={currentVal}
          onChange={handleChange}
          placeholder={placeholder}
          className="body1 flex h-[15rem] w-full resize-none rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.5rem] pb-[3rem] whitespace-pre-line placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        />
        {limit && (
          <div className="caption2 absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem] text-gray-600">
            {currentVal?.length}/{maxLength}
          </div>
        )}
      </div>
    </>
  );
};

export default TextField;
