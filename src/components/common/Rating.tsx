import Icon from '@/components/common/Icon';

type RatingProps = {
  rate: number;
};

const Rating = ({ rate }: RatingProps) => {
  return (
    <div className="flex justify-center gap-[0.4rem]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-[3.2rem] w-[3.2rem] ${i < rate ? 'text-blue-2' : '[&>path]:fill-background-02 [&>path]:stroke-gray-400'}`}
        />
      ))}
    </div>
  );
};

export default Rating;
