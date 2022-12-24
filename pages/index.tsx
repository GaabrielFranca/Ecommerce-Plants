import React from "react";
import Banner from "../components/Banner.js";
import ProductsRow from "../components/ProductsRow.js";
import BtnCustom from "../components/BtnCustom.js";
import { client } from "../lib/client.js";
function index({ product }) {
  return (
    <div>
      <Banner />
      <ProductsRow product={product} title="Produtos em destaque" />
      <ProductsRow product={product} title="Produtos em Promoção" />
      <div className="flex justify-center my-8">
        <BtnCustom title="Confira todos os produtos" />
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const product = await client.fetch(`*[_type == "product"]`);
  return {
    props: {
      product,
    },
  };
}

export default index;
