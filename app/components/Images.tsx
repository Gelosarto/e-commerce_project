"use client";
import Image from "next/image";
import { useState } from "react";

const images = [1, 2, 3, 4];

export default function Images() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setSelectedImage((i) => (i === 0 ? 3 : i - 1));
  const next = () => setSelectedImage((i) => (i === 3 ? 0 : i + 1));

  return (
    <div className="w-full md:max-w-[700px] md:pl-20 md:pr-10 md:pt-20">
      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end text-white text-2xl cursor-pointer"
              onClick={() => setLightboxOpen(false)}
            >
              <Image src="/images/icon-close.svg" alt="Close" width={20} height={20} />
            </button>

            <div className="relative">
              <button
                onClick={prev}
                className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer z-10"
              >
                <Image src="/images/icon-previous.svg" alt="Previous" width={12} height={18} />
              </button>
              <Image
                src={`/images/image-product-${selectedImage + 1}.jpg`}
                alt={`Product ${selectedImage + 1}`}
                width={500}
                height={500}
                className="rounded-xl"
              />
              <button
                onClick={next}
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer z-10"
              >
                <Image src="/images/icon-next.svg" alt="Next" width={12} height={18} />
              </button>
            </div>

            <ul className="flex flex-row gap-6">
              {images.map((_, i) => (
                <li key={i}>
                  <Image
                    src={`/images/image-product-${i + 1}-thumbnail.jpg`}
                    alt={`Thumbnail ${i + 1}`}
                    width={80}
                    height={80}
                    className={`rounded-lg cursor-pointer border-2 ${
                      selectedImage === i
                        ? "border-orange-500 opacity-50"
                        : "border-transparent hover:opacity-70"
                    }`}
                    onClick={() => setSelectedImage(i)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* GALLERY NORMALE */}
      <div className="relative">
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center z-10 md:hidden"
        >
          <Image src="/images/icon-previous.svg" alt="Previous" width={12} height={18} />
        </button>

        <div className="relative w-full h-[300px] md:h-[600px]">
          <Image
            src={`/images/image-product-${selectedImage + 1}.jpg`}
            alt={`Product ${selectedImage + 1}`}
            fill
            className="object-cover rounded-none md:rounded-xl cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          />
        </div>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center z-10 md:hidden"
        >
          <Image src="/images/icon-next.svg" alt="Next" width={12} height={18} />
        </button>
      </div>

      {/* Thumbnail solo desktop */}
      <ul className="hidden md:flex flex-row gap-10 mt-10">
        {images.map((_, i) => (
          <li key={i}>
            <Image
              src={`/images/image-product-${i + 1}-thumbnail.jpg`}
              alt={`Thumbnail ${i + 1}`}
              width={100}
              height={100}
              className={`rounded-lg cursor-pointer border-2 ${
                selectedImage === i
                  ? "border-orange-500 opacity-50"
                  : "border-transparent hover:opacity-70"
              }`}
              onClick={() => setSelectedImage(i)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
