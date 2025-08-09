'use client';
import { useParams } from 'next/navigation';

const DetailPage = () => {
  const { id } = useParams(); // id는 string

  return <div>위시풀 상세 페이지 - ID: {id}</div>;
};

export default DetailPage;
