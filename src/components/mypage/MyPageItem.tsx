import Link from 'next/link';

import Icon from '@/components/common/Icon';

type MyPageItemProps = {
  page: string;
  link: string;
  disabled?: boolean;
};

const MyPageItem = ({ page, link, disabled }: MyPageItemProps) => {
  return (
    <li>
      <Link
        className="flex items-center justify-between px-[1.6rem] py-[1.4rem]"
        href={link}
      >
        <span className={`title1 ${disabled ? 'text-gray-300' : 'text-text'}`}>
          {page}
        </span>
        <Icon
          name="next"
          className={`${disabled ? 'text-gray-300' : 'text-gray-600'}`}
        />
      </Link>
    </li>
  );
};

export default MyPageItem;
