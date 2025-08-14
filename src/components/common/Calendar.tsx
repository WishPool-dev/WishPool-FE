'use client';

import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Icon from '@/components/common/Icon';
import styles from '@/styles/Calendar.module.css';

import { ko } from 'date-fns/locale';

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  content?: string;
}

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick, content }, ref) => {
    return (
      <div className="relative w-full">
        <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
          {content}
        </p>
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

interface CalendarProps {
  content?: string;
}

const Calendar = ({ content }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <>
      <DatePicker
        locale={ko}
        selected={selectedDate}
        onChange={(d) => setSelectedDate(d)}
        dateFormat="yyyy/MM/dd"
        customInput={<CustomInput content={content} />}
        wrapperClassName="w-full"
        popperPlacement="bottom"
        calendarClassName={styles.customCalendarSize}
      />
    </>
  );
};

export default Calendar;
