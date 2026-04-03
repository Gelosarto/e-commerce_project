"use client";
import { createContext, useContext, useState } from "react";

type CartItem = {
  name: string;
  price: number;
  totalPrice: number;
  qty: number;
};

type CartContextType = {
  cartItem: CartItem | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: () => void;
};

const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  const addToCart = (item: CartItem) => {
    setCartItem(item);
  };

  const removeFromCart = () => {
    setCartItem(null);
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);



