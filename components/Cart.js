import React, { useState } from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/solid";
import BtnCustom from "./BtnCustom";
import { useStateContext } from "../context/useContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
import { toast } from "react-toastify";

export default function Cart({ cartRef }) {
  const {
    cartItems,
    toggleQty,
    onRemove,
    qty,
    totalPrice,
    IncrementQty,
    totalQty,
    DecrementQty,
  } = useStateContext();
  // criar uma funcao para verificar a screem da tela
  const [checkMobal, setCheckMobal] = useState(null);

  const truncateString = (string, count) =>
    string.length > count ? string.substr(0, count - 1) + "..." : string;
  const handlePayment = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecionando...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <>
      <div className="relative max-w-5xl m-auto z-10">
        <div
          ref={cartRef}
          className="w-full absolute sm:w-[30rem] top-0 right-0 bg-white px-12 py-12 "
        >
          <div className="space-y-2 border-y-4 border-color-custom-green py-8 overflow-scroll scrollbar-hide h-[250px]">
            {cartItems.length >= 1 ? (
              cartItems.map((item, index) => (
                <div key={item._id} className="flex">
                  <div className="w-28 h-28 relative ">
                    {item.image[0] ? (
                      <Image
                        as="image"
                        priority={false}
                        sizes="h-28 w-28"
                        alt="logo"
                        src={urlFor(item.image[0].asset).url()}
                        fill
                      />
                    ) : (
                      <div className="bg-gray-300"></div>
                    )}
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
                    <TrashIcon
                      onClick={() => onRemove(item)}
                      className="absolute top-12  right-0   w-4 h-4 text-color-custom-green cursor-pointer"
                    />
                    <div className="font-subTitle flex mt-2">
                      <div className=" flex  flex-grow ">
                        <div className="flex items-center justify-center space-x-1">
                          <button
                            onClick={() => toggleQty(item._id, "Increment")}
                            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 "
                          >
                            +
                          </button>
                          <div className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-3 text-base">
                            {item.qty}
                          </div>
                          <button
                            onClick={() => toggleQty(item._id, "Decrement")}
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
              ))
            ) : (
              <div className="flex justify-center items-center h-[100%]">
                <h2 className="text-subtitle text-lg text-color-custom-gray">
                  Carrinho vazio.
                </h2>
              </div>
            )}
          </div>
          {cartItems.length >= 1 && (
            <div className="flex flex-col text-custom-color-gray font-subtitle mt-2 text-base">
              <div className="flex items-center ">
                <h3 className="flex-grow ">preço total:R${totalPrice},00</h3>
                <h3 className="flex-grow text-end">total items:{totalQty}</h3>
              </div>
              <div className="m-auto">
                <BtnCustom
                  onclick={handlePayment}
                  title="Finalizar pedido"
                ></BtnCustom>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <div className=" cursor-pointer bg-black w-screen h-screen absolute left-0 top-0 opacity-75 " />
      </div>
    </>
  );
}
