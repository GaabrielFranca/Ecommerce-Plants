import React, { useContext, createContext, useState } from "react";

const MyContext = createContext();

export const ContextStorage = ({ children }) => {
  const [cart, setCart] = useState([]);

  return <MyContext.Provider value={{ cart }}>{children}</MyContext.Provider>;
};

export const useStateContext = () => useContext(MyContext);
