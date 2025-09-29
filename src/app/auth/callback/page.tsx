'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

import Loading from '@/components/common/Loading';
import { PATH } from '@/constants/common/path';

const CallbackHandler = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const token = searchParams.get('accessToken');
      if (token) {
        localStorage.setItem('accessToken', token);
      }
    } finally {
      router.replace(PATH.HOME);
    }
  }, [searchParams]);

  return <Loading />;
};

const CallbackPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CallbackHandler />
    </Suspense>
  );
};

export default CallbackPage;
