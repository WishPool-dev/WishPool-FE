import BaseHeader from '@/components/layout/Header/BaseHeader';

const TextHeader = ({ title }: { title: string }) => {
  return (
    <BaseHeader
      centerSlot={<h1 className="title2 text-text text-center">{title}</h1>}
    />
  );
};

export default TextHeader;
