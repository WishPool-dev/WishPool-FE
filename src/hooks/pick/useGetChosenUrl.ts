import { useSearchParams, notFound } from 'next/navigation';

export const useGetChosenUrl = () => {
  const params = useSearchParams();
  const chosenUrl = params.get('chosenUrl');

  if (chosenUrl) {
    return chosenUrl;
  } else {
    notFound();
  }
};
