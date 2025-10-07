import Icon from '@/components/common/Icon';
import UserTag from '@/components/common/UserTag';

type BirthDayInfoProps = {
  celebrant: string;
  birthDay: string;
};

const BirthdayInfo = ({ celebrant, birthDay }: BirthDayInfoProps) => {
  return (
    <div className="flex items-center p-[1.6rem]">
      <UserTag>생일자</UserTag>
      <span className="text-text body1 ml-[1.2rem]">{celebrant}</span>
      <span className="text-text body1 ml-auto flex items-center gap-[1.2rem]">
        <Icon name="birthday" className="text-pink-1 h-[2rem] w-[2rem]" />
        {birthDay}
      </span>
    </div>
  );
};

export default BirthdayInfo;
