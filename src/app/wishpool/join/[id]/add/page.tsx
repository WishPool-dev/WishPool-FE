'use client';
import { useEffect, useState } from 'react';

import { GiftItemDto } from '@/api/domain/join/types';
import GiftField from '@/components/common/Form/GiftField';
import Question from '@/components/common/Form/Question';
import Icon from '@/components/common/Icon';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import { PATH } from '@/constants/common/path';

const STORAGE_KEY = 'wishpool_gifts';

const AddPage = () => {
  const [gifts, setGifts] = useState<GiftItemDto[]>([
    { itemName: '', itemUrl: '' },
  ]);

  const wishpoolId = Number(sessionStorage.getItem('wishpoolId'));

  useEffect(() => {
    const initialGifts = sessionStorage.getItem(STORAGE_KEY);

    if (initialGifts) {
      try {
        const parsed = JSON.parse(initialGifts) as GiftItemDto[];
        if (Array.isArray(parsed) && parsed.length > 0) setGifts(parsed);
      } catch {}
    }
  }, []);

  const handleGiftChange = (
    idx: number,
    field: keyof GiftItemDto,
    value: string,
  ) => {
    setGifts((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
  };

  const addGift = () => {
    if (gifts.length >= 5) return;
    setGifts((prev) => [...prev, { itemName: '', itemUrl: '' }]);
  };

  const removeGift = (idx: number) => {
    setGifts((prev) => {
      const next = prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev;

      const result = next.length === 0 ? [{ itemName: '', itemUrl: '' }] : next;

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result));
      return result;
    });
  };

  const hasAtLeastOne = gifts.some(
    (g) => g.itemName.trim().length > 0 && g.itemUrl.trim().length > 0,
  );
  const isNextDisabled = !hasAtLeastOne;

  return (
    <>
      <Question required={true} question="주고 싶은 선물을 제안해 주세요." />

      <div className="mt-[4rem]">
        {gifts.map((gift, idx) => (
          <div key={idx} className="mb-[2.4rem]">
            <GiftField
              index={idx}
              label={`선물 ${idx + 1}`}
              placeholder="선물 이름을 알려 주세요."
              maxLength={20}
              valueItemName={gift.itemName}
              valueLink={gift.itemUrl}
              onChangeItemName={(v) => handleGiftChange(idx, 'itemName', v)}
              onChangeLink={(v) => handleGiftChange(idx, 'itemUrl', v)}
              onRemove={() => removeGift(idx)}
            />
          </div>
        ))}
      </div>

      <button
        className="mt-[3.2rem] flex h-[5.6rem] w-full items-center justify-center rounded-[12px] border border-gray-600 bg-transparent"
        type="button"
        onClick={addGift}
      >
        <div className="flex items-center gap-4">
          <Icon
            name="plus"
            title="선물 추가 버튼 아이콘"
            className="text-text"
          />
          <span className="text-text title1">선물 더 추가</span>
        </div>
      </button>
      <ButtonContainer
        isNextDisabled={isNextDisabled}
        next={PATH.JOIN_PREVIEW(wishpoolId)}
        back={PATH.JOIN_NAME(wishpoolId)}
      />
    </>
  );
};

export default AddPage;
