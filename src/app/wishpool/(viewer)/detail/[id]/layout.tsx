import React from 'react';

import BackMoreHeader from '@/components/layout/Header/BackMoreHeader';

const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackMoreHeader title="위시풀" />
      <main>{children}</main>
    </>
  );
};

export default DetailLayout;
