'use client';

import { useAnimation } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { useRef, useState } from 'react';

type deleteCardProps = {
  onRemove: (id: number) => void;
  id: number;
};

export function useDeleteCard({ onRemove, id }: deleteCardProps) {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [fixedMode, setFixedMode] = useState(false);
  const [frame, setFrame] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const DELETE_THRESHOLD = 100;

  const startFixed = () => {
    const card = cardRef.current;
    if (!card) return;

    const cardFrame = card.getBoundingClientRect();
    setFrame({
      left: cardFrame.left,
      top: cardFrame.top,
      width: cardFrame.width,
      height: cardFrame.height,
    });
    setFixedMode(true);

    controls.set({ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 });
  };

  const stopFixed = () => {
    setFixedMode(false);
  };

  const handleDragStart = () => {
    startFixed();
  };

  const handleDrag = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const raw = info.offset.y / (DELETE_THRESHOLD * 1.2);
    const progress = Math.max(0, Math.min(1, raw));
    const opacity = 1 - 0.8 * progress;
    const scale = 1 - 0.06 * progress;
    controls.set({ opacity, scale });
  };

  const animateDownAndRemove = async () => {
    const card = cardRef.current;
    if (!card) return;

    const cardFrame = card.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;

    const cardCenterY = cardFrame.top + cardFrame.height / 2;
    const targetY = viewportH - cardCenterY + 80;

    await controls.start({ zIndex: 999 });
    await controls.start({
      x: 0,
      y: targetY,
      opacity: 0,
      scale: 0.9,
      rotate: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    });

    onRemove(id);
    stopFixed();
  };

  const snapBack = async () => {
    await controls.start({
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 600, damping: 40 },
    });
    stopFixed();
  };

  const handleDragEnd = async (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y > DELETE_THRESHOLD) {
      await animateDownAndRemove();
    } else {
      await snapBack();
    }
  };

  const fixedStyle = fixedMode
    ? {
        position: 'fixed' as const,
        left: frame.left,
        top: frame.top,
        width: frame.width,
        height: frame.height,
        touchAction: 'pan-x' as const,
      }
    : { touchAction: 'pan-x' as const };

  const renderSpacer = fixedMode;

  return {
    cardRef,
    controls,
    fixedMode,
    renderSpacer,
    fixedStyle,
    handleDragStart,
    handleDrag,
    handleDragEnd,
  };
}
