import { iconMap } from '@/assets/icons/iconMap';
import Icon from '@/components/common/Icon';

export type IconName = keyof typeof iconMap;

interface IconSectionProps {
  iconName: IconName;
  onClick: () => void;
  title: string;
}

const IconSection = ({ iconName, onClick, title }: IconSectionProps) => {
  return (
    <div className="flex gap-[2rem]">
      <button type="button" onClick={onClick}>
        <Icon name={iconName} title={title} />
      </button>
    </div>
  );
};

export default IconSection;
