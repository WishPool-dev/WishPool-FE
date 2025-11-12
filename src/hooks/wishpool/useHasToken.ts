import { useEffect, useState } from 'react';

export const useHasToken = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) setHasToken(true);
  }, []);

  return hasToken;
};
