'use client';
import { useState } from 'react';

import ActiveEventSection from '@/app/Home/ActiveEventSection';
import CreateEventSection from '@/app/Home/CreateEventSection';
import PlanTypeSection from '@/app/Home/PlanTypeSection';

const Home = () => {
  const [planType, setPlanType] = useState<'funding' | 'wishpool'>('funding');

  const handlePlanType = (type: 'funding' | 'wishpool') => {
    setPlanType((prev) => (prev === type ? prev : type));
  };

  return (
    <>
      <PlanTypeSection planType={planType} onSelectType={handlePlanType} />
      <ActiveEventSection planType={planType} />
      <CreateEventSection planType={planType} />
    </>
  );
};

export default Home;
