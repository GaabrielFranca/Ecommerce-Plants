import React from "react";
import Image from "next/image";
import Logo from "../public/images/LogoWhite.svg";
import whatsapp from "../public/images/IconWhatsapp.svg";
import instagram from "../public/images/IconInstagram.svg";
import facebook from "../public/images/IconFacebook.svg";
import FooterSession from "./FooterSession.js";
const Footer = () => {
  return (
    <div className="bg-color-custom-black w-full pt-4">
      <div className="pr-8 md:pr-4 lg:pr-0 mt-1 gap-6 flex flex-col md:flex-row justify-between items-center m-auto  max-w-screen-lg border-b pb-10 pt-6 border-white">
        <Image src={Logo} alt="Logo" sizes="h-83 w-133 " priority={true} />
        <div className="grid grid-cols-2 md:grid-cols-4  items-center gap-16">
          <FooterSession
            title="Sobre"
            p="Lorem ipsum dolor  sit"
            p1="Lorem ipsum dolor  sit"
            p2="Lorem ipsum dolor  sit"
          />
          <FooterSession
            title="Contato"
            p="Lorem ipsum dolor  sit"
            p1="Lorem ipsum dolor  sit"
            p2="Lorem ipsum dolor  sit"
          />
          <FooterSession
            title="Termos"
            p="Lorem ipsum dolor  sit"
            p1="Lorem ipsum dolor  sit"
            p2="Lorem ipsum dolor  sit"
          />
          <FooterSession
            title="Direitos"
            p="Lorem ipsum dolor  sit"
            p1="Lorem ipsum dolor  sit"
            p2="Lorem ipsum dolor  sit"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center m-auto  text-white py-8">
        <p className="text-bold pb-2">@copy todos os direitos reservados.</p>
        <div className="space-x-3 flex">
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
    </div>
  );
};

export default Footer;
