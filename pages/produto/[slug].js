import React from "react";
import BtnCustom from "../../components/BtnCustom.js";
import Image from "next/image";
import { client, urlFor } from "../../lib/client.js";
const product = ({ product: { details, image, name, price, slug } }) => {
  console.log(image);
  return (
    <div className=" flex flex-col m-auto max-w-screen-lg px-4 py-8  md:space-x-8 md:flex-row lg:px-0 mt-4">
      <div className="flex flex-row md:mx-8  md:flex-col md:space-y-4">
        <div className="relative w-64 h-64 sm:w-96 sm:h-96  md:w-72 md:h-72 lg:w-96 lg:h-96">
          <Image
            fill
            sizes="w-94 h-64"
            priority={true}
            src={urlFor(image[0].asset).url()}
            alt={name}
          />
        </div>
        <div className="flex flex-1 ml-4 md:ml-0  flex-col gap-4  md:flex-row">
          {image[0].asset ? (
            <div className="relative w-24 h-full sm:w-full md:w-full max-w-[200px] md:h-24">
              <Image
                as="image"
                fill
                sizes="w-1/3 h-1/3"
                priority={false}
                src={urlFor(image[0].asset).url()}
                alt="Minha imagem"
              />
            </div>
          ) : (
            <div className="bg-gray-300  w-24 h-full sm:w-full md:w-full max-w-[200px] md:h-24"></div>
          )}
          {image[1] ? (
            <div className="relative w-24 h-full sm:w-full md:w-full max-w-[200px] md:h-24">
              <Image
                as="image"
                fill
                sizes="w-1/3 h-1/3"
                priority={false}
                src={urlFor(image[1].asset).url()}
                alt="Minha imagem"
              />
            </div>
          ) : (
            <div className="bg-gray-300  w-24 h-full sm:w-full md:w-full max-w-[200px] md:h-24"></div>
          )}
          {image[2] ? (
            <div className="relative w-24 h-full sm:w-full md:w-full max-w-[200px] md:h-24">
              <Image
                as="image"
                fill
                sizes="w-1/3 h-1/3"
                priority={false}
                src={urlFor(image[2].asset).url()}
                alt="Minha imagem"
              />
            </div>
          ) : (
            <div className="bg-gray-300  w-24 h-full sm:w-full md:w-full max-w-[200px] md:h-24"></div>
          )}
        </div>
      </div>
      {/* details */}
      <div className=" border-gray-300 border-b-2">
        <h2 className="mt-4 md:mt-0 font-title mb-2 text-2xl md:text-4xl text-color-custom-black">
          {name}
        </h2>
        <span className="text-sm md:text-base text-left font-text text-color-custom-gray">
          {details}
        </span>
        <div className="font-subTitle flex  flex-row items-center pt-4">
          <div className=" flex  flex-grow ">
            <div className="flex items-center justify-center space-x-1">
              <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 ">
                +
              </button>
              <div className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 text-base">
                {0}
              </div>
              <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3">
                -
              </button>
            </div>
          </div>
          <div className="text-left sm:text-end">
            <p className="text-base">R${price},00</p>
          </div>
        </div>
        <div className="flex  space-x-2">
          <BtnCustom title="Comprar" />
          <BtnCustom title="Adicionar ao carrinho" />
        </div>
        <div className="mt-4 mb-4 md:mb-0 flex flex-1 space-y-4">
          <p className="flex-grow text-color-custom-gray font-text text-sm">
            Formas de pagameto:
          </p>
          <div className="flex flex-grow space-x-1 mt-4 justify-end">
            <div className="w-4 h-4 bg-color-custom-gray"></div>
            <div className="w-4 h-4 bg-color-custom-gray"></div>
            <div className="w-4 h-4 bg-color-custom-gray"></div>
            <div className="w-4 h-4 bg-color-custom-gray"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
     slug {
       current
     }
   }
   `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: { product },
  };
};
export default product;
