import Calendar from '@/components/common/Calendar';
import UserTag from '@/components/common/UserTag';

interface CalendarFieldProps {
  label: string;
  tag?: string;
}

const CalendarField = ({ label, tag }: CalendarFieldProps) => {
  return (
    <>
      <div className="mb-[0.8rem] flex flex-row items-center gap-[1.2rem]">
        {tag ? <UserTag>{tag}</UserTag> : null}
        <p className="subtitle2 text-text max-w-[430px]">{label}</p>
      </div>
      <Calendar />
    </>
  );
};

export default CalendarField;
