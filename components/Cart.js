import React, { useState } from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";
import BtnCustom from "./BtnCustom";
export default function Cart({ cartRef }) {
  // criar uma funcao para verificar a screem da tela
  const [checkMobal, setCheckMobal] = useState(null);

  const truncateString = (string, count) =>
    string.length > count ? string.substr(0, count - 1) + "..." : string;

  return (
    <>
      <div className="relative max-w-5xl m-auto z-10">
        <div
          ref={cartRef}
          className="w-full absolute sm:w-[30rem] top-0 right-0 bg-white px-12 py-12 "
        >
          <div className="space-y-2 border-y-4 border-color-custom-green py-8 overflow-scroll scrollbar-hide h-[250px]">
            <div className="flex">
              <div className="w-28 h-28 relative ">
                <Image
                  as="image"
                  priority={false}
                  sizes="h-28 w-28"
                  alt="logo"
                  src="/images/Product.png"
                  fill
                />
              </div>
              <div className="pl-2 sm:pl-8 relative pb-4 border-top">
                <div className=":w-[270px]">
                  <h3 className="text-sm sm:text-base sm:mb-1">Cactu</h3>
                  <p className="font-text   text-gray-500 text-sm sm:text-base">
                    {/* mobile truncateString 27 letter
                    normal truncateString 62 letter */}
                    {checkMobal
                      ? truncateString(
                          " As Plantas tem a capacidade de purifcar e melhorar qualidade do ar e bla bla bla bla ",
                          40
                        )
                      : truncateString(
                          " As Plantas tem a capacidade de purifcar e melhorar qualidade do ar e bla bla bla bla ",
                          61
                        )}
                  </p>
                </div>
                <TrashIcon className="absolute top-12  right-0   w-4 h-4 text-color-custom-green" />
                <div className="font-subTitle flex mt-2">
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
                  <div className="text-end">
                    <p>R$88,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-custom-color-gray font-text text-base">
            {/* <div className="flex">
              <h3 className="flex-grow ">preço total: 3</h3>
              <h3 className="flex-grow text-end">items total: 3</h3>
            </div> */}
            <div className="m-auto">
              <BtnCustom title="Finalizar pedido"></BtnCustom>
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
