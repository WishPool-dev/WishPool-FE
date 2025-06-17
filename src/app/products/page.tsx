'use client';

import ProductCard from './_components/ProductCard';

const Products = () => {
  console.log('product page');

  return (
    <div>
      <div className="container px-[2rem] py-[1.6rem]">
        <div className="mr-[1.1rem]">
          <ProductCard
            brandName="브랜드명"
            productName="제품명"
            price="10,000"
            discountPercentage="20"
          />
        </div>
        <div className="mt-[1.6rem]">
          <ProductCard
            brandName="브랜드명"
            productName="제품명"
            price="10,000"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
