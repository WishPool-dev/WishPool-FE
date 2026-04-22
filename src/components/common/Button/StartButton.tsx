'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import { PATH } from '@/constants/common/path';

export default function StartButton() {
  const router = useRouter();

  const handleStart = () => {
    const token = localStorage.getItem('accessToken');
    router.push(token ? PATH.HOME : PATH.LOGIN);
  };

  return <Button onClick={handleStart}>WishpooL 시작하기</Button>;
}