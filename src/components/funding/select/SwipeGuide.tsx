'use client';

import { useEffect, useState } from 'react';

import Icon from '@/components/common/Icon';
import styles from '@/styles/SwipeGuide.module.css';

export default function SwipeGuide() {
  const storageKey = 'swipe-guide';
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem(storageKey) === '1';
    if (!seen) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(storageKey, '1');
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="z-guide fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={handleClose} />

      <div className="relative mx-auto w-full max-w-[430px] px-6 pt-10 pb-8">
        <p className="body1 mb-[3.2rem] text-center text-white">
          마음에 들지 않는 선물을 아래로 쓱- 내려서 지우고
          <br />
          원하는 선물만 남겨 보세요!
        </p>

        <div className="relative h-[28rem]">
          <div
            className={`animate-cardMove ${styles.cardMove} absolute left-1/2 h-[6rem] w-[4rem] -translate-x-1/2 rounded-[6px] bg-gray-400`}
          />
          <div
            className={`animate-fingerMove ${styles.fingerMove} absolute top-[4.3rem] left-1/2 -translate-x-1/3`}
          >
            <Icon name="swipe" className="h-[5.4rem] w-[5.4rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
