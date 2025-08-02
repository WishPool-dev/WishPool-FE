'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';

import ActiveEventSection from '@/app/(home)/_components/ActiveEventSection';
import CreateEventSection from '@/app/(home)/_components/CreateEventSection';
import PlanTypeSection from '@/app/(home)/_components/PlanTypeSection';

const planCount = {
  funding: 0,
  wishpool: 1,
};

const Home = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    redirect('/intro');
  }

  const [planType, setPlanType] = useState<'funding' | 'wishpool'>('wishpool');

  const handlePlanType = (type: 'funding' | 'wishpool') => {
    setPlanType((prev) => (prev === type ? prev : type));
  };

  return (
    <>
      <PlanTypeSection
        planType={planType}
        onSelectType={handlePlanType}
        planCount={planCount}
      />
      <ActiveEventSection planType={planType} planCount={planCount} />
      <div className="bg-background-02 -mx-[2rem] h-[100vh] p-[2rem]">
        <CreateEventSection planType={planType} />
      </div>
    </>
  );
};

export default Home;
