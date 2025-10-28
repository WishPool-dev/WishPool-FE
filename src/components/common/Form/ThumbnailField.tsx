'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
import Icon from '@/components/common/Icon';
import { useImageUpload } from '@/hooks/wishpool/useImageUpload';

const ThumbnailField = () => {
  const fileAlbumRef = useRef<HTMLInputElement>(null);
  const fileCameraRef = useRef<HTMLInputElement>(null);

  const {
    preview,
    error,
    imageKey: uploadedImageKey,
    handleImageChange,
    isUploading,
  } = useImageUpload();

  const [imageKey, setImageKey] = useState<string | null>(null);

  useEffect(() => {
    const key = sessionStorage.getItem('wishpool_imageKey');
    if (key) setImageKey(key);
  }, []);

  useEffect(() => {
    if (uploadedImageKey) {
      sessionStorage.setItem('wishpool_imageKey', uploadedImageKey);
      setImageKey(uploadedImageKey);
    }
  }, [uploadedImageKey]);

  const { data: imgData } = useGetWishpoolImage(imageKey ?? '');

  const finalPreviewUrl = preview ? preview : (imgData?.key ?? null);

  return (
    <>
      <div className="relative mt-[4rem] h-[18.7rem] w-full rounded-[12px] border border-gray-300">
        {finalPreviewUrl ? (
          <Image
            width={353}
            height={187}
            src={finalPreviewUrl}
            alt="썸네일 미리보기"
            className="h-full w-full rounded-[12px] object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[0.9rem]">
            <Icon name="photo" className="text-gray-400" />

            {isUploading ? (
              <span className="subtitle3 text-gray-600">이미지 업로드 중</span>
            ) : (
              <span className="subtitle3 text-gray-600">썸네일 이미지</span>
            )}
          </div>
        )}
      </div>

      <input
        ref={fileAlbumRef}
        type="file"
        name="imageKey"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <input
        ref={fileCameraRef}
        type="file"
        name="thumbnail"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleImageChange}
      />

      <button
        type="button"
        onClick={() => fileAlbumRef.current?.click()}
        aria-label="사진 추가"
        className="subtitle2 text-text mt-[2.3rem] flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]"
      >
        <Icon
          name="photo"
          className="items-center text-gray-600"
          width={24}
          height={24}
        />
        사진 추가
      </button>
      <button
        type="button"
        onClick={() => fileCameraRef.current?.click()}
        aria-label="사진 촬영(카메라)"
        className="subtitle2 text-text flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]"
      >
        <Icon name="camera" width={24} height={24} />
        사진 촬영
      </button>
      {error && <p className="mt-[0.8rem] text-red-600">{error}</p>}
    </>
  );
};

export default ThumbnailField;
