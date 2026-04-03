"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import CartContent from "./CartContent";
import { useCart } from "../CartContext"; // Importa il telecomando

export default function Navbar() {
  const cart = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const closeCart = (e: Event) => {
      // Chiude il carrello solo se clicchi fuori dalla card
      if (isCartOpen) setIsCartOpen(false);
    };

    if (isCartOpen) {
      window.addEventListener("click", closeCart);
    }

    return () => window.removeEventListener("click", closeCart);
  }, [isCartOpen]);

  if (!cart) return null;
  const { cartItem, addToCart, removeFromCart } = cart;

  const navLinks = [
    { name: "Collections", href: "/collections" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 md:px-40 py-10 border-b border-gray-200">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={138} height={20} />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-500 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Carrello e Avatar */}
      <div className="flex items-center gap-10">
        <button
          className="relative cursor-pointer"
          onClick={(event) => {
            if (event && typeof event.stopPropagation === "function") {
              event.stopPropagation();
            }
            setIsCartOpen(!isCartOpen);
          }}
        >
          <Image
            src="/images/icon-cart.svg"
            alt="Cart"
            width={22}
            height={20}
          />

          {/* BADGE ARANCIONE */}
          {cartItem && cartItem.qty > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#ff7d1a] text-white text-[10px] font-bold rounded-full w-5 h-4 flex items-center justify-center">
              {cartItem.qty}
            </span>
          )}
        </button>

        {isCartOpen && (
          <div className="absolute top-18 right-[20px] w-[350px] md:justify-center bg-white rounded-xl shadow-2xl z-50 min-h-[250px] flex flex-col">
            {/* Intestazione Card */}
            <div className="p-6 border-b border-gray-200">
              <p className="font-bold text-black">Cart</p>
            </div>

            {/* Contenuto Card */}
            <div className="flex-1 flex items-center justify-center p-6">
              {!cartItem ? (
                <p className="text-gray-500 font-bold text-center">
                  Your cart is empty.
                </p>
              ) : (
                <CartContent />
              )}
            </div>
          </div>
        )}
        <div className="hover:border-2 hover:border-orange-500 rounded-full cursor-pointer transition-all">
          <Image
            src="/images/image-avatar.png"
            alt="User"
            width={40}
            height={40}
          />
        </div>

        {/* Burger Menu Button (solo mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <Image
              src="/images/icon-closeMenu.svg"
              alt="Close"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/images/icon-menu.svg"
              alt="Menu"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-6 absolute top-24 left-0 w-full bg-white p-10 z-50 shadow-2xl md:hidden font-bold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
