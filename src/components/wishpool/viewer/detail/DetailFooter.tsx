import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

type DetailFooterProps = {
  day?: number;
  title: string;
  content: string;
  buttonContent: string;
  disabled?: boolean;
};

const DetailFooter = ({
  day,
  title,
  content,
  buttonContent,
  disabled,
}: DetailFooterProps) => {
  return (
    <footer className="flex items-center border-t-gray-300 bg-white p-[2rem]">
      <div className="grow-1 space-y-[0.4rem]">
        <div className="flex items-center gap-[0.8rem]">
          {day ? (
            <span className="caption1 bg-blue-6 text-blue-primary rounded-[4px] px-[0.6rem] py-[0.2rem]">
              D-{day}
            </span>
          ) : (
            <Icon name="cheer" />
          )}
          <span className="subtitle2 text-text">{title}</span>
        </div>
        <p className="caption2 text-gray-600">{content}</p>
      </div>
      <div className="grow-1">
        <Button
          textSize="sm"
          disabled={disabled}
          backgroundColor={disabled ? 'disabled' : 'dark'}
        >
          {buttonContent}
        </Button>
      </div>
    </footer>
  );
};

export default DetailFooter;
