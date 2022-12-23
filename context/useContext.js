import React, { useContext, createContext, useState } from "react";

const MyContext = createContext();

export const ContextStorage = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotaltotalQty] = useState(0);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const IncrementQty = () => setQty((prev) => prev + 1);
  const DecrementQty = () => (qty <= 1 ? 1 : setQty((prev) => prev - 1));

  return (
    <MyContext.Provider
      value={{
        cartItems,
        totalQty,
        qty,
        totalPrice,
        IncrementQty,
        DecrementQty,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useStateContext = () => useContext(MyContext);
