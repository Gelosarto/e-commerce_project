"use client";
import Image from "next/image";
import { useCart } from "../CartContext"; // Importiamo il "citofono"

export default function CartContent() {
  const { cartItem, removeFromCart } = useCart();
  if (!cartItem) return null;

  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex items-center justify-between gap-4">
        {/* Immagine prodotto */}
        <Image
          src="/images/image-product-1-thumbnail.jpg"
          alt="product"
          width={50}
          height={50}
          className="rounded-md"
        />

        {/* Testi e Prezzi */}
        <div className="text-gray-500 text-sm flex-1">
          <p className="truncate w-40">{cartItem.name}</p>
          <p>
            ${cartItem.price.toFixed(2)} x {cartItem.qty}
            <span className="font-bold text-black ml-4">
              ${(cartItem.price * cartItem.qty).toFixed(2)}
            </span>
          </p>
        </div>

        {/* Bottone Elimina */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Qui 'e' è l'evento reale del click
            removeFromCart();
          }}
          className="..."
        >
          <Image
            src="/images/icon-delete.svg"
            alt="delete"
            width={14}
            height={16}
          />
        </button>
      </div>

      {/* Bottone Checkout */}
      <button className="bg-orange-500 text-black font-bold py-4 rounded-xl w-full hover:bg-orange-400 transition-colors">
        Checkout
      </button>
    </div>
  );
}
