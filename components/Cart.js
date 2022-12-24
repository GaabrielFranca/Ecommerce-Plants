import React, { useState } from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";
import BtnCustom from "./BtnCustom";
import { useStateContext } from "../context/useContext";
import { urlFor } from "../lib/client";
export default function Cart({ cartRef }) {
  const { cartItems, totalQty, qty, totalPrice, IncrementQty, DecrementQty } =
    useStateContext();
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
            {cartItems.map((item, index) => (
              <div key={item._id} className="flex">
                <div className="w-28 h-28 relative ">
                  <Image
                    as="image"
                    priority={false}
                    sizes="h-28 w-28"
                    alt="logo"
                    src={urlFor(item.image[0].asset).url()}
                    fill
                  />
                </div>
                <div className="pl-2 sm:pl-8 relative pb-4 border-top">
                  <div className=":w-[270px]">
                    <h3 className="text-sm sm:text-base sm:mb-1">
                      {item.name}
                    </h3>
                    <p className="font-text   text-gray-500 text-sm sm:text-base">
                      {/* mobile truncateString 27 letter
                  normal truncateString 62 letter */}
                      {checkMobal
                        ? truncateString(`${item.details}`, 40)
                        : truncateString(`${item.details}`, 61)}
                    </p>
                  </div>
                  <TrashIcon className="absolute top-12  right-0   w-4 h-4 text-color-custom-green" />
                  <div className="font-subTitle flex mt-2">
                    <div className=" flex  flex-grow ">
                      <div className="flex items-center justify-center space-x-1">
                        <button
                          onClick={IncrementQty}
                          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 "
                        >
                          +
                        </button>
                        <div className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 text-base">
                          {qty}
                        </div>
                        <button
                          onClick={DecrementQty}
                          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="text-end">
                      <p>R${item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-custom-color-gray font-subtitle mt-2 text-base">
            <div className="flex items-center ">
              <h3 className="flex-grow ">preço total:{totalPrice}</h3>
              <h3 className="flex-grow text-end">items total:{totalQty}</h3>
            </div>
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
