'use client';

import { useAnimation } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { useRef, useState } from 'react';

type useDeleteCardProps = {
  onRemove: (id: number) => void;
  id: number;
};

export function useDeleteCard({ onRemove, id }: useDeleteCardProps) {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // 드래그 중 fixed로 띄우기 위한 상태
  const [fixedMode, setFixedMode] = useState(false);
  const [frame, setFrame] = useState({ left: 0, top: 0, width: 0, height: 0 });

  /** 카드 높이 기반 임계치 (35%, 최소 100px) */
  const getDeleteThreshold = () => {
    const h = cardRef.current?.getBoundingClientRect().height ?? 0;
    return Math.max(100, h * 0.35);
  };

  const startFixed = () => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setFrame({ left: r.left, top: r.top, width: r.width, height: r.height });
    setFixedMode(true);
    // 초기값 세팅
    controls.set({ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 });
  };

  const stopFixed = () => setFixedMode(false);

  /** 드래그 중: 아래로 내릴수록 점점 투명/살짝 축소 */
  const handleDrag = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = getDeleteThreshold();
    const raw = info.offset.y / (threshold * 1.2); // 임계치보다 조금 더 길게 페이드
    const progress = Math.max(0, Math.min(1, raw));
    const opacity = 1 - 0.8 * progress; // 1 → 0.2
    const scale = 1 - 0.06 * progress; // 1 → 0.94
    controls.set({ opacity, scale });
  };

  /** 삭제 애니메이션: 화면 아래로 "직선" 이동 + 페이드아웃 */
  const animateDownAndRemove = async () => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;

    // 카드 중심에서 화면 하단 바깥까지 이동량 (여유 +80px)
    const cardCenterY = r.top + r.height / 2;
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

  /** 스냅백 */
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

  /** onDragEnd 핸들러 */
  const handleDragEnd = async (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y > getDeleteThreshold()) {
      await animateDownAndRemove();
    } else {
      await snapBack();
    }
  };

  /** 드래그 시작 핸들러 */
  const handleDragStart = () => startFixed();

  /** fixed 모드일 때 적용할 style */
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

  /** fixed 모드일 때 자리 유지용 스페이서 렌더링 여부 */
  const renderSpacer = fixedMode;

  return {
    // refs & controls
    cardRef,
    controls,

    // states
    fixedMode,
    renderSpacer,

    // styles
    fixedStyle,

    // handlers
    handleDragStart,
    handleDrag,
    handleDragEnd,
  };
}
