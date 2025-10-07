'use client';

import { useEffect, useRef, useState } from 'react';

import { usePostWishpoolImage } from '@/api/domain/form/hooks';
import Icon from '@/components/common/Icon';

const ThumbnailField = () => {
  const fileAlbumRef = useRef<HTMLInputElement>(null);
  const fileCameraRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadMutation = usePostWishpoolImage();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('최대 5MB까지만 허용합니다.');
      return;
    }
    setError(null);

    const url = URL.createObjectURL(file);
    setPreview(url);

    try {
      const res = await uploadMutation.mutateAsync(file);
      sessionStorage.setItem('wishpool_imageKey', res.key);
    } catch {
      setError('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <div className="relative mt-[4rem] h-[18.7rem] w-full rounded-[12px] border border-gray-300">
        {preview ? (
          <img
            src={preview}
            alt="썸네일 미리보기"
            className="h-full w-full rounded-[12px] object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[0.9rem]">
            <Icon name="photo" className="text-gray-400" />
            <span className="subtitle3 text-gray-600">썸네일 이미지</span>
          </div>
        )}
      </div>

      <input
        ref={fileAlbumRef}
        type="file"
        name="imageKey"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />

      <input
        ref={fileCameraRef}
        type="file"
        name="thumbnail"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleChange}
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
