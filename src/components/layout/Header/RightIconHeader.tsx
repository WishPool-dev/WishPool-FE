import { IconName } from '@/assets/icons/iconMap';
import Icon from '@/components/common/Icon';
import BaseHeader from '@/components/layout/Header/BaseHeader';

type RightIconHeaderProps = {
  title: string;
  iconName: IconName;
  onClick?: () => void;
};

const RightIconHeader = ({
  title,
  iconName,
  onClick,
}: RightIconHeaderProps) => {
  return (
    <BaseHeader
      centerSlot={<h1 className="title2 text-text text-center">{title}</h1>}
      rightSlot={
        <button type="button" onClick={onClick} aria-label={`${iconName} 버튼`}>
          <Icon name={iconName} title={`${iconName} 아이콘`} />
        </button>
      }
    />
  );
};

export default RightIconHeader;
