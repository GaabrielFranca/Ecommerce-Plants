import React from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";
export default function Cart({ cartRef }) {
  const [counterItem, setCounterItem] = React.useState(0);
  return (
    <>
      <div className="relative max-w-5xl m-auto z-10">
        <div
          ref={cartRef}
          className="w-full absolute sm:w-[30rem] top-0 right-0 bg-white px-12 py-16 "
        >
          <div className="border-y-4 border-color-custom-green py-8 overflow-scroll scrollbar-hide h-[250px]">
            <div className="flex">
              <div className="w-[64px] relative  sm:w-[100px]">
                <Image
                  priority={true}
                  sizes="h-28 w-28"
                  alt="logo"
                  src="/images/Product.png"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="pl-2 sm:pl-8 relative pb-4 border-top">
                <div className=":w-[270px]">
                  <h3 className="text-base sm:mb-1">Cactu</h3>
                  <p className="hidden sm:block text-gray-500 text-base">
                    As Plantas tem a capacidade de purifcar e melhorar a
                    qualidade...
                  </p>
                </div>
                <TrashIcon className="w-[16px] h-[16px] right-[-66px] absolute sm:top-[66px] sm:right-0 text-color-custom-green" />
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:pt-4">
                  <div className=" flex space-x-1 flex-grow">
                    <div className="cursor-pointer w-[30px] h-[30px]  flex items-center justify-center bg-gray-100">
                      <p className="">-</p>
                    </div>
                    <div className="w-[30px] h-[30px]  bg-gray-100 flex items-center justify-center">
                      <p>0</p>
                    </div>
                    <div className="cursor-pointer w-[30px] h-[30px] bg-gray-100 flex items-center justify-center">
                      <p>+</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-end">
                    <p>R$88,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" cursor-pointer bg-black w-screen h-screen absolute left-0 top-0 opacity-75 " />
      </div>
    </>
  );
}
