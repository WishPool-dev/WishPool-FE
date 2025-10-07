import { useParams } from 'next/navigation';

export const useGetWishpoolId = () => {
  const { id } = useParams<{ id: string }>();
  const wishpoolId = Number(id);

  return wishpoolId;
};
