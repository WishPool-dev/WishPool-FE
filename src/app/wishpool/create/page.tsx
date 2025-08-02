'use client';

import ProgressBar from '@/app/wishpool/create/(form)/_components/ProgressBar';
import Step1 from '@/app/wishpool/create/(form)/Step1';
import RightIconHeader from '@/components/layout/Header/RightIconHeader';

const page = () => {
  return (
    <>
      <RightIconHeader title="위시풀 만들기" iconName="cancel" />
      <ProgressBar currentStep={1} />
      <Step1 />
    </>
  );
};

export default page;
