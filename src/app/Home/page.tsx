'use client';
import { useState } from 'react';

import PlanTypeSection from '@/app/Home/PlanTypeSection';

const Home = () => {
  const [planType, setPlanType] = useState<'funding' | 'wishpool'>('funding');

  const handlePlanType = (type: 'funding' | 'wishpool') => {
    setPlanType((prev) => (prev === type ? prev : type));
  };

  return (
    <>
      <PlanTypeSection planType={planType} onSelectType={handlePlanType} />
    </>
  );
};

export default Home;
