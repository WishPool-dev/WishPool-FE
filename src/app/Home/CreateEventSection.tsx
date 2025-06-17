'use client';

import type { PlanType } from '@/types/planType';

const CreateEventSection = (planType: PlanType) => {
  return <div>{planType}</div>;
};

export default CreateEventSection;
