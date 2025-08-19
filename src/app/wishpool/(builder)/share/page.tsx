import WishpoolShareSection from '@/components/common/WishpoolShareSection';

const SharePage = () => {
  const linkurl = 'https://wishpool.store/${wishpoolId}'; // 백엔드에서 제공하는 링크로 변경 필요
  const target = 'participants';
  return (
    <>
      <WishpoolShareSection linkUrl={linkurl} shareTarget={target} />
    </>
  );
};

export default SharePage;
