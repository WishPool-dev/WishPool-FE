import { useEffect, useState } from 'react';

const Toast = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="z-toast fixed top-[2rem] right-0 left-0">
      <div className="mx-auto w-full max-w-[430px] px-[2rem]">
        <p className="body2 bg-button-color w-full rounded-[8px] px-[1.6rem] py-[1.2rem] text-white opacity-[0.95]">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Toast;
