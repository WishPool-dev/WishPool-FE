import CalendarField from '@/components/common/CalendarField';
import Icon from '@/components/common/Icon';
import InputBox from '@/components/common/InputBox';
import UserTag from '@/components/common/UserTag';
import { formFieldHeightMap } from '@/constants/wishpool/builder/formField.constants';
import { FormFieldSize, Mode } from '@/types/wishpool/builder/FormField';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  maxLength?: number;
  tag?: string;
  variant?: FormFieldSize;
  mode?: Mode;
}

const FormField = ({
  label,
  placeholder,
  maxLength,
  tag,
  variant = 'default',
  mode = 'default',
}: FormFieldProps) => {
  if (mode === 'calendar') {
    return (
      <>
        <div className="mb-[0.8rem] flex flex-row items-center gap-[1.2rem]">
          {tag ? <UserTag>{tag}</UserTag> : null}
          <p className="subtitle2 text-text max-w-[430px]">{label}</p>
        </div>
        <CalendarField />
      </>
    );
  }

  if (mode === 'link') {
    return (
      <>
        <div className="mb-[0.8rem] flex justify-between">
          <p className="subtitle2 text-text max-w-[430px]">{label}</p>
          <button className="flex items-center justify-center">
            <Icon
              name="trash"
              className="cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        </div>
        <InputBox
          placeholder={placeholder}
          maxLength={maxLength}
          height={formFieldHeightMap[variant]}
        />
        <div className="mt-[1.2rem]">
          <InputBox
            placeholder="선물 판매 링크를 붙여넣기 해 주세요."
            height={formFieldHeightMap.default}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">{label}</p>
      <InputBox
        placeholder={placeholder}
        maxLength={maxLength}
        height={formFieldHeightMap[variant]}
      />
    </>
  );
};

export default FormField;
