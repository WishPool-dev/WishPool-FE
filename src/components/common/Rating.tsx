import Icon from '@/components/common/Icon';

type RatingProps = {
  rate: number;
  onChange: (rate: number) => void;
};

const Rating = ({ rate, onChange }: RatingProps) => {
  return (
    <div className="flex justify-center gap-[0.4rem]">
      {Array.from({ length: 5 }).map((_, i) => {
        const starIndex = i + 1;
        return (
          <button
            key={i}
            type="button"
            onClick={() => {
              onChange(starIndex);
            }}
          >
            <Icon
              key={i}
              name="star"
              className={`h-[3.2rem] w-[3.2rem] ${starIndex <= rate ? 'text-blue-2' : '[&>path]:fill-background-02 [&>path]:stroke-gray-400'}`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
