type QuestionProps = {
  required: boolean;
  question: string;
};

const Question = ({ required, question }: QuestionProps) => {
  const label = required ? '필수 입력' : '선택 입력';
  const labelColor = required ? 'text-pink-primary' : 'text-gray-600';

  return (
    <>
      <span className={`caption1 h-[1.8rem] ${labelColor}`}>{label}</span>
      <h1 className="head1 text-text h-[3.2rem] pt-[0.4rem]">{question}</h1>
    </>
  );
};

export default Question;
