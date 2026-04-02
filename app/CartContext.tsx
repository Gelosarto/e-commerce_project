"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItem, setCartItem] = useState<any>(null);

  // Funzione per aggiungere
  const addToCart = (item: any) => {
    setCartItem(item);
  };

  // FUNZIONE PER CANCELLARE (Deve rimettere a null)
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



