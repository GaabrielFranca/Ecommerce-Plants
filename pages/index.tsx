import React from "react";
import Banner from "../components/Banner.js";
import ProductsRow from "../components/ProductsRow.js";
import BtnCustom from "../components/BtnCustom.js";

function index() {
  return (
    <div>
      <Banner />
      <ProductsRow title="Produtos em destaque" />
      <ProductsRow title="Produtos em Promoção" />
      <div className="flex justify-center my-8">
        <BtnCustom title="Confira todos os produtos" />
      </div>
    </div>
  );
}

export default index;
