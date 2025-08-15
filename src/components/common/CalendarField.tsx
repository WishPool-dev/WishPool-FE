'use client';
import { ko } from 'date-fns/locale';
import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Icon from '@/components/common/Icon';
import styles from '@/styles/Calendar.module.css';

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <div className="relative w-full">
        <button
          type="button"
          onClick={onClick}
          ref={ref}
          className={`body1 flex h-[5.6rem] w-full items-center justify-between rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.5rem] text-left placeholder:text-gray-400 focus:outline-none`}
          aria-label="날짜 선택"
        >
          <span className={value ? '' : 'text-gray-400'}>
            {value || 'YY/MM/DD'}
          </span>
          <span className="absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem]">
            <Icon name="calendar" title="달력 열기" />
          </span>
        </button>
      </div>
    );
  },
);
CustomInput.displayName = 'CustomInput'; //디버깅용

const CalendarField = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <DatePicker
        locale={ko}
        selected={selectedDate}
        onChange={(d) => setSelectedDate(d)}
        dateFormat="yyyy/MM/dd"
        customInput={<CustomInput />}
        wrapperClassName="w-full"
        popperPlacement="bottom"
        calendarClassName={styles.customCalendarSize}
      />
    </>
  );
};

export default CalendarField;
