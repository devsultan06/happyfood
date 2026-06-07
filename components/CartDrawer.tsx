"use client";

import Image from "next/image";
import { PRODUCTS, Product } from "@/lib/products";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [key: string]: number };
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
  onClear: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onAdd,
  onRemove,
  onClear,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  // Extract products in cart
  const cartItems = Object.entries(cart)
    .map(([id, quantity]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      return { product, quantity };
    })
    .filter((item): item is { product: Product; quantity: number } => !!item.product);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        {/* Drawer Panel */}
        <div className="pointer-events-auto w-screen max-w-md bg-white shadow-2xl flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-6 border-b border-brand-cream flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-brand-dark flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-brand-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Your Order Basket
            </h2>
            <div className="flex items-center gap-4">
              {cartItems.length > 0 && (
                <button
                  onClick={onClear}
                  className="text-xs font-semibold text-brand-red hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-brand-dark/50 hover:bg-brand-cream hover:text-brand-dark transition-colors cursor-pointer"
                aria-label="Close Drawer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length > 0 ? (
              <div className="divide-y divide-brand-cream">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="py-4 flex gap-4 first:pt-0 last:pb-0 group">
                    {/* Image Thumbnail */}
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-brand-orange/10 bg-brand-cream shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Product Metadata */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                          {item.product.name}
                        </h4>
                        <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mt-0.5">
                          {item.product.category.replace("_", " ")}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-brand-dark/80 mt-1">
                        {formatPrice(item.product.price)} each
                      </span>
                    </div>

                    {/* Quantity Selector Side */}
                    <div className="flex flex-col items-end justify-between">
                      <span className="text-sm font-extrabold text-brand-dark">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <div className="flex items-center rounded-full bg-brand-cream border border-brand-orange/15 px-1.5 py-0.5 mt-2 scale-90 origin-right">
                        <button
                          onClick={() => onRemove(item.product)}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-orange hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
                        >
                          <span className="text-xs font-bold leading-none">-</span>
                        </button>
                        <span className="w-6 text-center text-xs font-extrabold text-brand-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onAdd(item.product)}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-orange hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
                        >
                          <span className="text-xs font-bold leading-none">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="rounded-full bg-brand-cream p-4 text-brand-orange/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-12 w-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-brand-dark">Your basket is empty</h3>
                <p className="mt-2 text-xs font-semibold text-brand-dark/50 max-w-xs leading-relaxed">
                  Browse our menu catalog and add items you'd like to order to your basket before proceeding!
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-brand-orange/95 cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </div>

          {/* Footer Checkout Panel */}
          {cartItems.length > 0 && (
            <div className="border-t border-brand-cream bg-brand-cream/35 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between text-brand-dark font-sans">
                <span className="text-sm font-semibold text-brand-dark/60">Subtotal</span>
                <span className="text-xl font-extrabold text-brand-dark">{formatPrice(subtotal)}</span>
              </div>
              
              <div className="rounded-2xl bg-brand-orange/5 border border-brand-orange/10 p-3.5 flex items-start gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-brand-orange shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
                <p className="text-[11px] font-semibold text-brand-dark/70 leading-relaxed">
                  <strong>Delivery Fee:</strong> Delivery charges vary depending on your specific location in Lagos / Ibadan and will be finalized with you on WhatsApp.
                </p>
              </div>

              <button
                onClick={onCheckout}
                className="w-full inline-flex items-center justify-center rounded-full bg-brand-orange py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-orange/95 hover:shadow-lg cursor-pointer active:scale-98"
              >
                Proceed to Booking Form
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
