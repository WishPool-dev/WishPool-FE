'use client';
import { useState } from 'react';

import ActiveEventSection from '@/app/wishpool/home/_components/ActiveEventSection';
import CreateEventSection from '@/app/wishpool/home/_components/CreateEventSection';
import PlanTypeSection from '@/app/wishpool/home/_components/PlanTypeSection';
import HomeHeader from '@/components/layout/Header/HomeHeader';

const planCount = {
  funding: 0,
  wishpool: 1,
};

const Home = () => {
  const [planType, setPlanType] = useState<'funding' | 'wishpool'>('funding');

  const handlePlanType = (type: 'funding' | 'wishpool') => {
    setPlanType((prev) => (prev === type ? prev : type));
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <>
      <HomeHeader />
      {/* {isOpen && <NavSection />} */}

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
