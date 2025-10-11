import Image from 'next/image';
import { useRef, useEffect } from 'react';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import Icon from '@/components/common/Icon';
import { useImageUpload } from '@/hooks/wishpool/useImageUpload';

type ThumnailProps = {
  imageKey?: string;
  onChangeImageKey?: (newKey: string) => void;
};

const Thumbnail = ({ imageKey, onChangeImageKey }: ThumnailProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 폼 이미지 받아오기
  const { data: wishpoolImage } = useGetWishpoolImage(imageKey ?? '');

  // 이미지 업로드
  const {
    preview,
    error,
    handleImageChange,
    isUploading,
    imageKey: uploadedImageKey,
  } = useImageUpload();

  useEffect(() => {
    if (uploadedImageKey && onChangeImageKey) {
      onChangeImageKey(uploadedImageKey);
    }
  }, [uploadedImageKey, onChangeImageKey]);

  const currentDisplayUrl = preview
    ? preview
    : wishpoolImage?.key || WishpoolCardImage;

  return (
    <div className="relative h-[22.2rem]">
      <Image
        src={currentDisplayUrl}
        width={430}
        height={240}
        className="h-full w-full object-cover"
        alt="위시풀 대표 이미지"
      />
      <div className="absolute inset-0 bg-black/20" />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        disabled={isUploading}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="absolute top-1/2 left-1/2 h-[7.2rem] w-[7.2rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70"
        aria-label="이미지 바꾸기"
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-[0.2rem]">
          <Icon name="photo" width={24} height={24} className="text-gray-600" />
          <span className="caption1 text-gray-600">바꾸기</span>
        </div>
      </button>
      {error && (
        <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-xs text-red-600">
          {error}
        </span>
      )}
    </div>
  );
};

export default Thumbnail;
