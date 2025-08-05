'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type BaseModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

const BaseModal = ({ children, onClose }: BaseModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="z-modal fixed inset-0 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div className="bg-white" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default BaseModal;
