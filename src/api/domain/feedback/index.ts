import { axiosInstance } from '@/api/axiosInstance';
import { FeedbackType } from '@/api/domain/feedback/types';
import { END_POINT } from '@/constants/common/endPoint';

export const postFeedback = async ({ rating, content }: FeedbackType) => {
  const res = await axiosInstance.post(`/${END_POINT.FEEDBACK}`, {
    rating,
    content,
  });
  return res.data;
};
