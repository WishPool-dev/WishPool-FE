import Link from 'next/link';

import Icon from '@/components/common/Icon';

type MyPageItemProps = {
  page: string;
  link: string;
};

const MyPageItem = ({ page, link }: MyPageItemProps) => {
  return (
    <li>
      <Link
        className="flex items-center justify-between px-[1.6rem] py-[1.4rem]"
        href={link}
      >
        <span className="text-text title1">{page}</span>
        <Icon name="next" />
      </Link>
    </li>
  );
};

export default MyPageItem;
