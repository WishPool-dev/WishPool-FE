'use client';

import * as React from 'react';

import Icon from '@/components/common/Icon';
import { Calendar } from '@/components/ui/calendar';

function formatDateYYMMDD(date: Date | undefined) {
  if (!date) return '';
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

interface InputDateBoxProps {
  setValue: (val: string) => void;
}

export function CalendarPicker({ setValue }: InputDateBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [month, setMonth] = React.useState<Date | undefined>(date);

  return (
    <>
      <button
        id="date-picker"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon name="calendar" />
      </button>

      {open && (
        <div className="fixed left-1/2 mt-[1.8rem] w-[350px] -translate-x-1/2 overflow-hidden rounded-[12px] border border-gray-400 bg-white p-0 shadow">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              setValue(formatDateYYMMDD(selectedDate));
              setOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default CalendarPicker;
