'use client';

import type { PlanType } from '@/types/planType';

const ActiveEventSection = (planType: PlanType) => {
  return <div>{planType}</div>;
};

export default ActiveEventSection;
