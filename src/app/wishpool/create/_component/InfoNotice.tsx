import Icon from '@/components/common/Icon';

export const InfoNotice = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-6 flex items-center rounded-[6px] py-[0.4rem] pr-[0.6rem] pl-[1.2rem]">
      <Icon name="gift" title="선물 아이콘" className="text-white" />
      <p className="text-blue-primary caption1 ml-[1.2rem]">{children}</p>
      <Icon
        name="down"
        title="아래 방향 아이콘"
        className="text-blue-primary ml-auto"
      />
    </div>
  );
};
