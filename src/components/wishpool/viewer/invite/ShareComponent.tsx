import Image, { StaticImageData } from 'next/image';

import IconButton from '@/components/common/Button/IconButton';
import Icon from '@/components/common/Icon';

interface shareComponentProps {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  linkTitle: string;
  linkUrl: string;
  linkDescription: string;
}

const ShareComponent = ({
  title,
  description,
  imgSrc,
  imgAlt,
  linkTitle,
  linkUrl,
  linkDescription,
}: shareComponentProps) => {
  return (
    <>
      <div className="mt-[2.8rem] flex flex-col items-center">
        <h3 className="text-text head1">{title}</h3>
        <p className="text-text body1 mt-[0.4rem]">{description}</p>
      </div>
      <div className="mt-[3.8rem] flex items-center justify-center">
        <Image src={imgSrc} alt={imgAlt} className="h-[18rem] w-[18rem]" />
      </div>

      <div className="bg-background-02 mt-[3.6rem] h-[19.2rem] w-full rounded-[12px] p-[2rem]">
        <p className="subtitle2 text-text ml-[0.6rem]">{linkTitle}</p>
        <div className="mt-[1.1rem] flex h-[4.9rem] w-full items-center justify-between gap-[1.2rem] rounded-[12px] bg-white px-[1.2rem] py-[0.8rem]">
          <p className="body2 ml-[0.8rem] text-gray-600">{linkUrl}</p>
          <button className="py[0.8rem] h-[3.3rem] rounded-[6px] border border-gray-400 px-[1.2rem]">
            <p className="text-text title3">링크 복사</p>
          </button>
        </div>
        <div className="mt-[1.2rem]">
          <IconButton textSize="md">
            <Icon name="kakao" title="카카오톡 아이콘" />
            <span>카카오톡으로 공유하기</span>
          </IconButton>
        </div>
      </div>
      <p className="body2 mt-[2.8rem] text-center text-gray-600">
        {linkDescription}
      </p>
    </>
  );
};

export default ShareComponent;
