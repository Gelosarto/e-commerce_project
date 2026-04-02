"use client";
import CartElementsButton from "./CartElementsButton";
import CartAddElement from "./CartAddElement";
import { useState } from "react";

export default function Text() {
  const [selectedQty, setSelectedQty] = useState(0);
  
  return (
    <div className="pt-20 px-6 max-w-2xl">
      <h1 className="font-bold opacity-60 text-xs tracking-widest">
        SNEAKER COMPANY
      </h1>
      <h2 className="text-4xl font-bold mt-4 leading-tight">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-gray-500 mt-6 max-w-md">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mt-8 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">$125.00</h1>
          <span className="bg-black text-white px-2 py-1 rounded-md text-sm font-bold">
            50%
          </span>
        </div>
        <p className="text-gray-500 font-bold line-through text-lg">$250.00</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <CartElementsButton onChange={(qty) => setSelectedQty(qty)} />
        <CartAddElement quantity={selectedQty} />
      </div>
    </div>
  );
}
