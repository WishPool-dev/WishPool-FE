import { useMutation } from '@tanstack/react-query';

import { postFeedback } from '@/api/domain/feedback';
import { FeedbackType } from '@/api/domain/feedback/types';

export const usePostFeedback = () => {
  return useMutation({
    mutationFn: ({ rating, content }: FeedbackType) =>
      postFeedback({ rating, content }),
  });
};
