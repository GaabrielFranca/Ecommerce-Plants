import React from "react";
import Image from "next/image";
const Products = ({ title }) => {
  return (
    <div className="m-auto  max-w-screen-lg px-4 py-4 lg:px-0 mt-8">
      <h2 className="text-[26px] mb-6 mt-2">{title}</h2>
      <div className="flex  space-x-8 overflow-scroll scrollbar-hide">
        {[1, 2, 3, 4].map((product, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              priority={true}
              height={396}
              width={240}
              className="object-cover min-w-[90px]"
              src="/images/product.png"
              sizes="w-[236px]"
              alt={product.toString()}
            />

            <div className="mt-4 items-center flex flex-col">
              <h3 className="text-base text-color-custom-gray">product</h3>
              <span className="">R$ 150,00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
