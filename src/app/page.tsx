import { redirect } from 'next/navigation';

import Home from '@/app/home/page';

export default function Page() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    redirect('/intro');
  }
  return <Home />;
}
