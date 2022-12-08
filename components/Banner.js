import React from "react";
import Image from "next/image";
import BtnCustom from "./BtnCustom";
const Banner = () => {
  return (
    <>
      <div className="relative h-[450px]  sm:h-[500px]  px-4 lg:px-0 overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="banner"
          priority={true}
          className="object-cover"
          fill
          sizes="h-[500px]"
        />
        <div className="relative top-[40px] m-auto  max-w-screen-lg">
          <div className="absolute w-[500px] top-1/4 left-0 ">
            <span className="text-md sm:text-2xl  font-bold uppercase text-color-custom-green">
              Não perca
            </span>
            <h1 className="mb-4 text-3xl w-[190px] md:w-[500px] sm:w-[450px] sm:leading-[53px] leading-[36px] sm:text-5xl sm:mb-8">
              As melhores plantas para a sua casa
            </h1>
            <p className="text-sm sm:text-base w-[300px]  sm:w-[400px] md:w-[500px] text-color-custom-gray">
              As plantas têm a capacidade de purifcar e meljorar a qualidade do
              ar.Funcionam como uma barreira contra as irradiações
              eletromagnéticas e ainda podem repelir ou transmutarem as energias
              de uma casa. Confira nossos produtos
            </p>
            <BtnCustom title="Confira" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
