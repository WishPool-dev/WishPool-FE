import Icon from '@/components/common/Icon';

const IconSection = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex gap-5">
      <Icon name="wish" title="찜 아이콘" />
      <button type="button" onClick={onClick}>
        <Icon name="menu" title="메뉴 아이콘" />
      </button>
      {/* close 버튼 & home 버튼 넣기 */}
    </div>
  );
};

export default IconSection;
