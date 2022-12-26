import React, { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";

const MyContext = createContext();

export const ContextStorage = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotaltotalQty] = useState(0);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  let foundProduct, indexProduct;

  const IncrementQty = () => setQty((prev) => prev + 1);
  const DecrementQty = () => (qty <= 1 ? 1 : setQty((prev) => prev - 1));
  const toggleQty = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    indexProduct = cartItems.findIndex((product) => product._id === id);
    const newCarItems = cartItems.filter((i) => i._id !== id);
    if (value === "Increment") {
      setCartItems([
        ...newCarItems,
        { ...foundProduct, qty: foundProduct.qty + 1 },
      ]);
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotaltotalQty((prev) => prev + 1);
    } else if (value === "Decrement") {
      if (foundProduct.qty > 1) {
        setCartItems([
          ...newCarItems,
          { ...foundProduct, qty: foundProduct.qty - 1 },
        ]);
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotaltotalQty((prev) => prev - 1);
      }
    }
  };
  const onAdd = (product, qty) => {
    // verificar se o produto ja existe no carrinho
    const CheckTwinsProducts = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice((prev) => prev + product.price * qty);
    setTotaltotalQty((prev) => prev + qty);

    if (CheckTwinsProducts) {
      const UpdatedCart = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id);
        console.log(cartItems);
        return {
          ...cartProduct,
          qty: cartProduct.qty + qty,
        };
      });
      setCartItems(UpdatedCart);
    } else {
      product.qty = qty;
      const newArray = [...cartItems, { ...product }];
      setCartItems(newArray);
    }
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
        toggleQty,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useStateContext = () => useContext(MyContext);
