import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Products = ({ title, product }) => {
  return (
    <div className="">
      <h2 className="text-[26px] mb-6 mt-2 font-title">{title}</h2>
      <div className="flex  space-x-8  overflow-scroll  scrollbar-hide">
        {product.map(({ name, price, image, details, slug }) => (
          <Link key={name} href={`/produto/${slug.current}`}>
            <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105 cursor-pointer">
              <Image
                as="image"
                priority={false}
                height={396}
                width={240}
                className="object-cover min-w-[90px] md:min-w-[240px]"
                src={urlFor(image && image[0])
                  .width(240)
                  .height(396)
                  .url()}
                sizes="w-[240px]"
                alt={name}
              />

              <div className="mt-4 items-center flex flex-col ">
                <h3 className="text-base text-color-custom-gray font-title">
                  {name}
                </h3>
                <span className="font-subTitle">R$ {price},00</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
