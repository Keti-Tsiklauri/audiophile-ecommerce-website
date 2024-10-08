import React, { createContext, useContext, ReactNode, useState } from "react";

interface CartItem {
  name: string;
  price: number;
  url: string;
  number: number;
}

interface GlobalState {
  navigationArray: string[];
  footerImages: string[];
  XX99MarkI: number;
  setXX99MarkI?: React.Dispatch<React.SetStateAction<number>>;
  XX99MarkII: number;
  setXX99MarkII?: React.Dispatch<React.SetStateAction<number>>;
  XX59: number;
  setXX59?: React.Dispatch<React.SetStateAction<number>>;
  ZX9: number;
  setZX9?: React.Dispatch<React.SetStateAction<number>>;
  ZX7: number;
  setZX7?: React.Dispatch<React.SetStateAction<number>>;
  YX1: number;
  setYX1?: React.Dispatch<React.SetStateAction<number>>;
  cart: CartItem[];
  setCart?: React.Dispatch<React.SetStateAction<CartItem[]>>;
  check: boolean;
  setCheck?: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with default values
export const GlobalContext = createContext<GlobalState>({
  navigationArray: [],
  footerImages: [],
  XX99MarkI: 1,
  setXX99MarkI: undefined,
  XX99MarkII: 1,
  setXX99MarkII: undefined,
  XX59: 1,
  setXX59: undefined,

  ZX9: 1,
  setZX9: undefined,
  ZX7: 1,
  setZX7: undefined,
  YX1: 1,
  setYX1: undefined,
  cart: [],
  setCart: undefined,

  check: false,
  setCheck: undefined,
  toggle: true,
  setToggle: undefined,
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [XX99MarkII, setXX99MarkII] = useState<number>(1);
  const [XX99MarkI, setXX99MarkI] = useState<number>(1);
  const [XX59, setXX59] = useState<number>(1);
  const [ZX9, setZX9] = useState<number>(1);
  const [ZX7, setZX7] = useState<number>(1);
  const [YX1, setYX1] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [check, setCheck] = useState(false);
  const [toggle, setToggle] = useState(true);
  const navigationArray: string[] = [
    "HOME",
    "HEADPHONES",
    "SPEAKERS",
    "EARPHONES",
  ];
  const footerImages: string[] = [
    "./images/icon-facebook.svg",
    "./images/icon-instagram.svg",
    "./images/icon-twitter.svg",
  ];

  return (
    <GlobalContext.Provider
      value={{
        navigationArray,
        footerImages,

        XX99MarkII,
        setXX99MarkII,
        XX99MarkI,
        setXX99MarkI,
        XX59,
        setXX59,
        ZX9,
        setZX9,
        ZX7,
        setZX7,
        YX1,
        setYX1,
        cart,
        setCart,
        check,
        setCheck,
        toggle,
        setToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);
