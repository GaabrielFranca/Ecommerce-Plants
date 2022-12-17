import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../public/images/Logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import whatsapp from "../public/images/IconWhatsapp.svg";
import instagram from "../public/images/IconInstagram.svg";
import facebook from "../public/images/IconFacebook.svg";
import Cart from "./Cart.js";
import useOutside from "../Hooks/useOutside";
const NavBar = () => {
  const router = useRouter();
  const [menuMobile, setMenuMobile] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const menuRef = useRef(null);
  const cartRef = useRef(null);
  const openMenu = () => {
    setMenuMobile(!menuMobile);
  };
  useOutside(menuRef, setMenuMobile);
  useOutside(cartRef, setCartOpen);

  return (
    <>
      <nav className="bg-white flex justify-between  items-center m-auto  max-w-screen-lg px-4 lg:px-0">
        <div className="cursor-pointer mt-1 " onClick={() => router.push("/")}>
          <Image src={Logo} alt="Logo" sizes="h-83 w-133" as="image" />
        </div>
        {menuMobile && (
          <>
            <div
              ref={menuRef}
              className={`bg-white w-72 z-50 h-screen   absolute top-0 right-0 duration-500 transition-all`}
            >
              <div className="relative">
                <XMarkIcon
                  onClick={() => {
                    setMenuMobile(!menuMobile);
                  }}
                  className="absolute cursor-pointer top-7 right-4  w-8 h-8"
                />

                <div className="absolute top-7 left-4 ">
                  <div className="flex space-x-1 items-center mt-0.5">
                    <UserCircleIcon className="h-8 w-8 " />
                    <p className="font-subtitle text-base m-0 text-gray-500">
                      Gabriel
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setMenuMobile(false);
                }}
                className="mt-24 ml-6 space-y-6 flex flex-col text-base font-subTitle text-gray-500"
              >
                <Link href="/produtos"> Produtos</Link>
                <Link href="/sobre"> Sobre nós</Link>
                <Link href="/contato">Entre em contato</Link>
                <Link href="/localize"> Localize-nos</Link>
              </div>
            </div>
            <div className="bg-black w-screen h-screen absolute left-0 top-0 opacity-75 z-20"></div>
          </>
        )}
        {!menuMobile && (
          <>
            <div className="hidden md:block space-x-10 text-base font-subTitle text-gray-500">
              <Link href="/produtos"> Produtos</Link>
              <Link href="/sobre"> Sobre nós</Link>
              <Link href="/contato">Entre em contato</Link>
              <Link href="/localize"> Localize-nos</Link>
            </div>
            <div className="flex space-x-5 ">
              <div className="hidden md:flex space-x-1 items-center mt-0.5">
                <UserCircleIcon className="h-8 w-8 text-color-custom-green" />
                <p className="text-base m-0 font-subTitle text-gray-500">
                  Gabriel
                </p>
              </div>
              <div
                onClick={() => {
                  setCartOpen(!cartOpen);
                }}
                className="relative cursor-pointer"
              >
                <ShoppingBagIcon className=" h-8 w-8 text-color-custom-green" />
                <div className="absolute bg-color-custom-gray rounded-full h-4 w-4 bottom-0 right-0 top-1.5">
                  <p className="-mt-1 ml-1 font-text text-color-custom-white">
                    2
                  </p>
                </div>
              </div>

              <Bars3Icon
                onClick={() => setMenuMobile(!menuMobile)}
                className="h-8 w-8 cursor-pointer md:hidden"
              />
            </div>
          </>
        )}
      </nav>
      <div className="bg-color-custom-black py-1">
        <div className="space-x-5 flex max-w-screen-lg m-auto justify-end px-4 lg:px-0">
          <a href="#">
            <Image src={whatsapp} alt="whatsaap"></Image>
          </a>
          <a href="#">
            <Image src={facebook} alt="facebook"></Image>
          </a>
          <a href="#">
            <Image src={instagram} alt="instagram"></Image>
          </a>
        </div>
      </div>
      {cartOpen && <Cart cartRef={cartRef} />}
    </>
  );
};

export default NavBar;
