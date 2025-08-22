'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
  hasOverlay?: boolean;
};

const BaseModal = ({ children, onClose, hasOverlay = false }: ModalProps) => {
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
      className={`z-modal fixed inset-0 mx-auto max-w-[430px] ${
        hasOverlay ? 'bg-black/60' : ''
      }`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.body,
  );
};

export default BaseModal;
