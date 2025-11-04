import { useState, useEffect } from 'react';

import { usePostWishpoolImage } from '@/api/domain/form/hooks';

export const useImageUpload = () => {
  const uploadMutation = usePostWishpoolImage();

  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageKey, setImageKey] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview?.startsWith('blob:')) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('이미지 파일만 업로드할 수 있어요');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('최대 5MB까지만 허용해요');
      return;
    }

    setError(null);

    const blobUrl = URL.createObjectURL(file);
    setPreview(blobUrl);

    try {
      const res = await uploadMutation.mutateAsync(file);
      if (res?.key) {
        setImageKey(res.key);
      }
    } catch {
      setError('이미지 업로드에 실패했어요. 다시 시도해주세요.');
    }
  };

  return {
    preview,
    error,
    imageKey,
    handleImageChange,
    isUploading: uploadMutation.isPending,
  };
};
