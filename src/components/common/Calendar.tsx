'use client';

import { ko } from 'date-fns/locale';
import { useState, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Icon from '@/components/common/Icon';
import styles from '@/styles/Calendar.module.css';
import { getDashDateFmt, parseYMD } from '@/utils/wishpool/builder/dateFmt';

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
          className="body1 flex h-[5.6rem] w-full items-center justify-between rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.5rem] text-left placeholder:text-gray-400 focus:outline-none"
          aria-label="날짜 선택"
        >
          <span className={value ? '' : 'text-gray-400'}>
            {value || 'YYYY/MM/DD'}
          </span>
          <span className="absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem]">
            <Icon name="calendar" title="달력 열기" width={24} height={24} />
          </span>
        </button>
      </div>
    );
  },
);
CustomInput.displayName = 'CustomInput';

type CalendarProps = {
  name: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
};

const Calendar = ({ name, value, onChange }: CalendarProps) => {
  const storageKey = `wishpool_${name}`;
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 초기 로드: 세션/디폴트에서 불러오기
  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey) ?? value ?? null;
    const parsed = parseYMD(saved);
    if (parsed) setSelectedDate(parsed);
  }, [storageKey, value]);

  const handleChange = (d: Date | null) => {
    setSelectedDate(d);
    if (d) {
      const ymd = getDashDateFmt(d);
      sessionStorage.setItem(storageKey, ymd);
      onChange?.(name, ymd);
    } else {
      sessionStorage.removeItem(storageKey);
      onChange?.(name, '');
    }
  };

  return (
    <DatePicker
      locale={ko}
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="yyyy/MM/dd"
      customInput={<CustomInput />}
      wrapperClassName="w-full"
      popperPlacement="bottom"
      calendarClassName={styles.customCalendarSize}
      minDate={new Date()}
    />
  );
};

export default Calendar;
