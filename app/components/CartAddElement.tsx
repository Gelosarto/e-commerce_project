"use client";
import { useCart } from "../CartContext";
import Image from "next/image";

export default function CartAddElement({ quantity }: { quantity: number }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    if (quantity <= 0) return; // Non aggiunge se è 0

    addToCart({
      name: "Fall Limited Edition Sneakers",
      price: 125,
      totalPrice: 125 * quantity,
      qty: quantity,
    });
  };

  return <button className="h-auto w-auto flex flex-row gap-4 bg-orange-500 text-black font-bold py-4 px-15 md:h-full md:justify-center rounded-xl hover:bg-orange-400 transition-colors" onClick={handleAdd}>
    <Image src="/images/icon-cartButton.svg" alt="Cart" width={22} height={20} />
    Add to cart
  </button>;
}




