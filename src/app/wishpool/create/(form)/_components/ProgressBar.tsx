type ProgressBarProps = {
  currentStep: 1 | 2 | 3 | 4;
};

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const progressStep = [
    { step: 1, label: '생일자' },
    { step: 2, label: '위시풀 소개' },
    { step: 3, label: '썸네일' },
    { step: 4, label: '마감일' },
  ];
  return (
    <div className="bg-background-02">
      <div className="subtitle3 flex h-[3.9rem] items-center justify-around border-b-[3px] border-gray-300 text-gray-600">
        {progressStep.map(({ step, label }) => (
          <span
            key={step}
            className={`relative inline-flex h-full flex-1 items-center justify-center ${currentStep === step ? 'after:absolute after:bottom-[-3px] after:left-0 after:h-[3px] after:w-full after:bg-blue-500' : ''}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
