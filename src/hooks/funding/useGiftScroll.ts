'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export function useGiftScroll<T extends HTMLElement>(initialIndex = 0) {
  const ref = useRef<T | null>(null);
  const [active, setActive] = useState(initialIndex);

  const getCards = (c: HTMLElement) =>
    Array.from(c.querySelectorAll<HTMLElement>('[data-card]'));

  const getNearestIndex = (c: HTMLElement) => {
    const center = c.scrollLeft + c.clientWidth / 2;
    const cards = getCards(c);

    let best = 0;
    let d = Infinity;
    cards.forEach((card, i) => {
      const mid = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < d) {
        d = dist;
        best = i;
      }
    });
    return best;
  };

  const scrollToIndex = (i: number) => {
    const c = ref.current;
    if (!c) return;
    const cards = getCards(c);
    const el = cards[i];
    if (el) {
      el.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'auto',
      });
      setActive(i);
    }
  };

  useLayoutEffect(() => {
    scrollToIndex(initialIndex, 'auto');
  }, [initialIndex]);

  // ✅ 스크롤 감지해서 active 갱신
  useEffect(() => {
    const c = ref.current;
    if (!c) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setActive(getNearestIndex(c));
        ticking = false;
      });
    };

    c.addEventListener('scroll', onScroll, { passive: true });
    return () => c.removeEventListener('scroll', onScroll);
  }, [initialIndex]);

  return { ref, active };
}
