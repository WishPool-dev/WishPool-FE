'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { PATH } from '@/constants/common/path';

const CallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get('accessToken');

    if (token) {
      localStorage.setItem('accessToken', token);
    }

    router.push(PATH.HOME);
  }, [searchParams, router]);

  return null;
};

export default CallbackPage;
