import { iconMap } from '@/components/common/Icon/iconMap';

type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
  title?: string;
};

const Icon = ({ name, width, height, className, title }: IconProps) => {
  const SvgIcon = iconMap[name];

  return (
    <SvgIcon
      width={width ?? 24}
      height={height ?? 24}
      className={className}
      role="img"
      aria-label={title}
    />
  );
};

export default Icon;
