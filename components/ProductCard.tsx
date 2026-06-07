"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function ProductCard({ product, quantity, onAdd, onRemove }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.image);

  useEffect(() => {
    setImgSrc(product.image);
  }, [product.image]);

  // Format naira price helper
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-brand-orange/5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-orange/15 hover:-translate-y-1">
      {/* Product Image Slot */}
      <div className="relative aspect-video w-full overflow-hidden bg-brand-cream">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => {
            setImgSrc(`https://picsum.photos/seed/${encodeURIComponent(product.id)}/600/400`);
          }}
          unoptimized={imgSrc.startsWith("/")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Category Tag */}
        <span className="absolute top-4 left-4 rounded-full bg-brand-cream/90 backdrop-blur-xs px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-orange border border-brand-orange/10 shadow-sm">
          {product.category.replace("_", " & ")}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold leading-tight text-brand-dark group-hover:text-brand-orange transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs font-medium text-brand-dark/60 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-brand-cream pt-4">
          <span className="text-base font-extrabold text-brand-dark">
            {formatPrice(product.price)}
          </span>

          {quantity === 0 ? (
            <button
              onClick={onAdd}
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-brand-orange/90 active:scale-95 cursor-pointer"
            >
              Add to Order
            </button>
          ) : (
            <div className="flex items-center rounded-full bg-brand-cream border border-brand-orange/20 px-2 py-1 shadow-xs">
              <button
                onClick={onRemove}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand-orange transition-colors hover:bg-brand-orange hover:text-white cursor-pointer active:scale-90"
                aria-label="Decrease Quantity"
              >
                <span className="text-base font-extrabold leading-none">-</span>
              </button>
              <span className="w-8 text-center text-xs font-extrabold text-brand-dark">
                {quantity}
              </span>
              <button
                onClick={onAdd}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand-orange transition-colors hover:bg-brand-orange hover:text-white cursor-pointer active:scale-90"
                aria-label="Increase Quantity"
              >
                <span className="text-base font-extrabold leading-none">+</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
