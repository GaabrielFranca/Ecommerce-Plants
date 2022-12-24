import React from "react";

const BtnCustom = ({ title, onclick, ...prev }) => {
  return (
    <button
      onClick={onclick}
      className="font-subTitle bg-color-custom-green text-sm px-3  py-2 lg:text-base lg:py-4 lg:px-16 text-white uppercase mt-[2rem] shadow-md active:scale-90 transition duration-150"
    >
      {title}
    </button>
  );
};

export default BtnCustom;
