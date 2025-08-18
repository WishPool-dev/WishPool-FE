'use client';

import { motion, useAnimation } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { useRef, useState } from 'react';

import { GiftCardType } from '@/types/common/giftCardType';

type CarouselCardProps = {
  index: number;
  activeIndex: number;
  onRemove: (id: number) => void;
} & GiftCardType;

const cardBaseStyles =
  'flex h-[29rem] w-[18rem] shrink-0 snap-center flex-col items-center ' +
  'gap-[2.4rem] rounded-[16px] border-[4px] px-[2rem] pt-[4rem] ' +
  'relative transition-all duration-300 ease-out will-change-transform';

export default function CarouselCard({
  index,
  activeIndex,
  onRemove,
  giftId,
  giftName,
  giftImage,
}: CarouselCardProps) {
  const isActive = index === activeIndex;
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [fixedMode, setFixedMode] = useState(false);
  const [frame, setFrame] = useState({ left: 0, top: 0, width: 0, height: 0 });

  // 드래그 시작: 현재 화면 좌표/크기 측정 → fixed 모드 진입
  const onDragStart = () => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setFrame({ left: r.left, top: r.top, width: r.width, height: r.height });
    setFixedMode(true);
    // 시작 시 상태 초기화(완전 불투명/원스케일)
    controls.set({ opacity: 1, scale: 1, rotate: 0, x: 0 });
  };

  const stopFixed = () => setFixedMode(false);

  // 임계치: 카드 높이의 35% (없으면 100px)
  const getDeleteThreshold = () => {
    const h = cardRef.current?.getBoundingClientRect().height ?? 0;
    return Math.max(100, h * 0.35);
  };

  // 드래그 중: 아래로 내릴수록 점점 투명(+살짝 축소)
  const onDrag = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { y: number } },
  ) => {
    const threshold = getDeleteThreshold();
    const raw = info.offset.y / (threshold * 1.2); // 임계치보다 조금 더 길게 페이드
    const progress = Math.max(0, Math.min(1, raw));
    const opacity = 1 - 0.8 * progress; // 1 → 0.2
    const scale = 1 - 0.06 * progress; // 1 → 0.94
    controls.set({ opacity, scale });
  };

  // 삭제: 아래로 "직선"으로 쭉 + 페이드아웃
  const animateDownAndRemove = async () => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;

    // 카드 중심에서 화면 하단 바깥까지의 이동량 (여유 +80px)
    const cardCenterY = r.top + r.height / 2;
    const targetY = viewportH - cardCenterY + 80;

    await controls.start({ zIndex: 999 });
    await controls.start({
      x: 0,
      y: targetY,
      opacity: 0,
      scale: 0.9,
      rotate: 0, // 꺾이지 않도록 회전 제거
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    });

    onRemove(giftId);
    stopFixed();
  };

  // 스냅백
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

  return (
    <>
      {/* fixed로 띄우는 동안 자리 유지용 스페이서 */}
      {fixedMode && (
        <div
          aria-hidden
          className="pointer-events-none h-[29rem] w-[18rem] shrink-0 snap-center opacity-0"
        />
      )}

      <motion.div
        ref={cardRef}
        data-card
        drag={isActive ? 'y' : false}
        dragElastic={0.12}
        dragMomentum={false}
        // 세로 직선 드래그 유지: x는 건드리지 않음
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={async (
          _e: MouseEvent | TouchEvent | PointerEvent,
          info: PanInfo,
        ) => {
          if (info.offset.y > getDeleteThreshold()) {
            await animateDownAndRemove();
          } else {
            await snapBack();
          }
        }}
        animate={controls}
        whileDrag={{ zIndex: 999 }}
        // 세로로만, 꺾임 없이 아래로 쭉
        style={
          fixedMode
            ? {
                position: 'fixed',
                left: frame.left,
                top: frame.top,
                width: frame.width,
                height: frame.height,
                // 드래그 제스처 충돌 방지(가로 스크롤은 허용)
                touchAction: 'pan-x',
              }
            : { touchAction: 'pan-x' }
        }
        className={[
          cardBaseStyles,
          isActive
            ? 'from-blue-3 to-blue-2 translate-y-[2.4rem] border-white bg-gradient-to-b shadow-lg'
            : 'bg-background-01 translate-y-0 border-transparent',
        ].join(' ')}
      >
        <img
          src={giftImage}
          alt="선물 카드 이미지"
          className="h-[13.3rem] w-[13.3rem] rounded-[12px] transition-all duration-300"
        />
        <span
          className={[
            'subtitle2 line-clamp-2 h-[4.8rem] text-center',
            isActive ? 'text-white' : 'text-gray-600',
          ].join(' ')}
        >
          {giftName}
        </span>
      </motion.div>
    </>
  );
}
