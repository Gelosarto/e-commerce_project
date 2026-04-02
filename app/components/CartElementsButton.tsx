"use client";
import { useState } from "react";

export default function CartElementsButton({ onChange }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onChange(newQty); // Comunica al padre
  };

  const decrement = () => {
    if (quantity > 0) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange(newQty); // Comunica al padre
    }
  };

  return (
    <div className="flex py-2 h-auto md:h-full items-center md:justify-center bg-gray-100 rounded-lg px-4 gap-8">
      <div className="flex gap-10 md:gap-25 items-center md:justify-center">
        <button
          onClick={decrement}
          className="text-orange-500 font-bold text-2xl"
        >
          -
        </button>
        <span className="font-bold w-4 text-center">{quantity}</span>
        <button
          onClick={increment}
          className="text-orange-500 font-bold text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
