'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';

import { useGetWishpools } from '@/api/domain/home/hooks';
import ActiveEventSection from '@/components/home/ActiveEventSection';
import CreateEventSection from '@/components/home/CreateEventSection';
import PlanTypeSection from '@/components/home/PlanTypeSection';
import { PATH } from '@/constants/common/path';

const Home = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');
    const isLoggedIn = !!token;

    if (!isLoggedIn) {
      redirect(PATH.INTRO);
    }
  }

  const [planType, setPlanType] = useState<'funding' | 'wishpool'>('wishpool');

  const handlePlanType = (type: 'funding' | 'wishpool') => {
    setPlanType((prev) => (prev === type ? prev : type));
  };

  const { data: wishpools } = useGetWishpools();
  const wishpoolCount = Number(wishpools?.length);

  return (
    <>
      <div className="bg-background-01 w-full px-[2rem]">
        <PlanTypeSection
          planType={planType}
          onSelectType={handlePlanType}
          wishpoolCount={wishpoolCount}
        />

        {wishpools && (
          <ActiveEventSection planType={planType} wishpools={wishpools} />
        )}
      </div>
      <div className="p-[2rem]">
        <CreateEventSection planType={planType} />
      </div>
    </>
  );
};

export default Home;
