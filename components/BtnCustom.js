import React from "react";

const BtnCustom = ({ title }) => {
  return (
    <button className="bg-color-custom-green py-4 px-16 text-white uppercase mt-[2rem] shadow-md active:scale-90 transition duration-150">
      {title}
    </button>
  );
};

export default BtnCustom;
