import axios from 'axios';

import { HTTP_STATUS } from '@/constants/common/httpStatus';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { response, config } = error;

    if (response?.status === HTTP_STATUS.UNAUTHORIZED) {
    }

    if (response) {
      console.error(
        `🚨[ERROR: ${response.status}] ${config?.method?.toUpperCase()} ${config?.url}}`,
        response.data,
      );
    } else {
      console.error('🚨[API NETWORK ERROR], error.message');
    }
    return Promise.reject(error);
  },
);
