import React, { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";

const MyContext = createContext();

export const ContextStorage = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotaltotalQty] = useState(0);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const IncrementQty = () => setQty((prev) => prev + 1);
  const DecrementQty = () => (qty <= 1 ? 1 : setQty((prev) => prev - 1));

  const onAdd = (product, qty) => {
    const CheckTwinsProducts = cartItems.find(
      (item) => item._id === product._id
    ); // verificar se o produto ja existe no carrinho
    setTotalPrice((prev) => prev + product.price * qty);
    setTotaltotalQty((prev) => prev + qty);

    if (CheckTwinsProducts) {
      const UpdatedCart = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            qty: cartProduct.qty + qty,
          };
      });
      setCartItems(UpdatedCart);
    } else {
      const newArray = [...cartItems, product];
      setCartItems(newArray);
    }

    ("Cactu adicionado 2x novos items no carrinho");
    if (qty === 1) {
      toast.success(`${product.name} ${qty}x novo item no carrinho`);
    } else {
      toast.success(`${product.name} ${qty}x novos items no carrinho`);
    }
  };

  return (
    <MyContext.Provider
      value={{
        cartItems,
        totalQty,
        qty,
        totalPrice,
        IncrementQty,
        DecrementQty,
        onAdd,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useStateContext = () => useContext(MyContext);
