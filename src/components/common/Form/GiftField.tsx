import { useEffect, useRef } from 'react';

import Icon from '@/components/common/Icon';
import { WISHPOOL_IMAGE_BASE_URL } from '@/constants/wishpool/image';
import { useImageUpload } from '@/hooks/wishpool/useImageUpload';
import { patchGift } from '@/utils/wishpool/viewer/manageGifts';

type GiftFieldProps = {
  index: number;
  label: string;
  placeholder?: string;
  maxLength?: number;
  valueItemName: string;
  valueLink: string;
  valueImageUrl?: string | null;
  onChangeItemName: (v: string) => void;
  onChangeLink: (v: string) => void;
  onChangeImage: (v: string) => void;
  onRemove: () => void;
};

const GiftField = ({
  index,
  label,
  placeholder,
  maxLength,
  valueItemName,
  valueLink,
  valueImageUrl,
  onChangeItemName,
  onChangeLink,
  onChangeImage,
  onRemove,
}: GiftFieldProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isUploading, preview, imageKey, handleImageChange } =
    useImageUpload();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newItemName = e.target.value;
    onChangeItemName(newItemName);
    patchGift(index, { itemName: newItemName });
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrlName = e.target.value;
    onChangeLink(newUrlName);
    patchGift(index, { itemUrl: newUrlName });
  };

  useEffect(() => {
    if (!imageKey) return;
    onChangeImage(imageKey);
    patchGift(index, { imageUrl: imageKey });
  }, [imageKey]);

  const imageSrc = valueImageUrl
    ? `${WISHPOOL_IMAGE_BASE_URL}/${valueImageUrl}`
    : null;

  const displayImageSrc = preview ?? imageSrc;
  return (
    <>
      <div className="mt-[4rem] mb-[0.8rem] flex justify-between">
        <p className="subtitle2 text-text max-w-[430px]">{label}</p>
        {index > 0 && (
          <button
            className="flex items-center justify-center"
            type="button"
            onClick={onRemove}
          >
            <Icon name="trash" width={20} height={20} />
          </button>
        )}
      </div>
      <div className="relative w-full">
        <input
          name="itemName"
          placeholder={placeholder}
          maxLength={maxLength}
          value={valueItemName}
          className="body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
          onChange={handleNameChange}
        />
        {maxLength && (
          <div className="caption2 absolute right-[1.6rem] bottom-[2rem] mt-[0.4rem] text-gray-600">
            {valueItemName.length}/{maxLength}
          </div>
        )}
      </div>
      <div className="mt-[1.2rem]">
        <input
          placeholder="선물 판매 링크를 붙여넣기 해 주세요."
          type="url"
          name="itemLink"
          value={valueLink}
          onChange={handleUrlChange}
          className="body1 flex h-[5.6rem] w-full rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
        />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        disabled={isUploading}
      />

      <div className="mt-[1.2rem]">
        {displayImageSrc ? (
          <img
            src={displayImageSrc}
            alt="선물 이미지 미리보기"
            width={82}
            height={82}
            className="border-background-02 h-[8.2rem] w-[8.2rem] rounded-[12px] border"
          />
        ) : (
          <div className="mt-[1.2rem]">
            <div className="flex h-[5.6rem] w-full gap-[1.2rem] rounded-[12px] border border-gray-400 px-[1.6rem] py-[1.6rem] focus:border-gray-400 focus:outline-none">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                aria-label="선물 이미지 추가"
                disabled={isUploading}
              >
                <Icon
                  name="photo"
                  width={24}
                  height={24}
                  className="text-gray-600"
                />
              </button>
              <p className="body1 text-text">선물 사진 추가</p>
            </div>
            <p className="caption2 text-blue-primary mt-[0.8rem]">
              *사진을 추가하지 않을 때는 기본 이미지로 보여줄게요.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default GiftField;
