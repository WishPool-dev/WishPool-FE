'use client';

import { useSearchParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useGetChosenUrl = () => {
  const params = useSearchParams();
  const [chosenUrl, setChosenUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = params.get('chosenUrl');
    if (url) {
      setChosenUrl(url);
    } else {
      notFound();
    }
  }, [params]);

  return chosenUrl;
};
