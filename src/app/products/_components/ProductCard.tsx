import Icon from '@/components/common/Icon';

interface CardProps {
  // imgUrl?: string
  brandName: string; //브랜드명
  productName: string; //제품명
  price: string; //가격
  discountPercentage?: string; //할인률
}

const ProductCard = ({
  // imgUrl,
  brandName,
  productName,
  price,
  discountPercentage,
}: CardProps) => {
  const onClick = () => {};
  return (
    <div>
      <div className="flex h-[27.1rem] w-[17.1rem] flex-col">
        <div className="relative">
          <img
            className="top-0 left-0 rounded-xl"
            src="https://placehold.co/171x171"
          />
          <button
            type="button"
            className="absolute top-[13.5rem] left-[13.5rem] z-10 text-gray-600"
            onClick={onClick}
          >
            <Icon name="wish" title="찜 아이콘" />
          </button>
        </div>
        <div className="caption2 pt-[0.8rem] text-gray-600">{brandName}</div>
        <div className="subtitle3">{productName}</div>
        <div className="flex flex-row pt-[2.9rem]">
          {discountPercentage && (
            <div className="title2 text-pink-primary pr-[0.4rem]">
              {discountPercentage}%
            </div>
          )}
          <div className="title2">{price}원</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
