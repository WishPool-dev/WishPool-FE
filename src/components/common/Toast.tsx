'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

const Toast = ({ children }: { children: React.ReactNode }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const appearTimer = setTimeout(() => setFadeIn(true), 10);
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const removeTimer = setTimeout(() => setRemoved(true), 2500);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className="z-toast fixed top-[2rem] right-0 left-0">
      <div className="mx-auto w-full max-w-[430px] px-[2rem]">
        <p
          className={clsx(
            'body2 bg-button-color w-full transform rounded-[8px] px-[1.6rem] py-[1.2rem] text-white transition-all duration-500',
            {
              'translate-y-4 opacity-0': !fadeIn || fadeOut,
              'translate-y-0 opacity-95': fadeIn && !fadeOut,
            },
          )}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Toast;
