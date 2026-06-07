"use client";

import Image from "next/image";

interface NavbarProps {
  cartCount: number;
  onCartToggle: () => void;
  onOpenBooking: () => void;
}

export default function Navbar({ cartCount, onCartToggle, onOpenBooking }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full glass-nav shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image
                  src="/images/happyfoods-logo.png"
                  alt="Happyfoods Treats Logo"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-none tracking-tight text-brand-dark sm:text-xl">
                  Happyfoods <span className="text-brand-orange">Treats</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-brand-green">
                  Delivering Happiness
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-semibold text-brand-dark/80 transition-colors hover:text-brand-orange"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-sm font-semibold text-brand-dark/80 transition-colors hover:text-brand-orange"
            >
              Our Menu
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-brand-dark/80 transition-colors hover:text-brand-orange"
            >
              Our Story
            </a>
            <a
              href="#testimonials"
              className="text-sm font-semibold text-brand-dark/80 transition-colors hover:text-brand-orange"
            >
              Reviews
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Cart Trigger Button */}
            <button
              onClick={onCartToggle}
              className="relative p-2.5 rounded-full border border-brand-orange/10 bg-white text-brand-dark transition-all duration-300 hover:bg-brand-cream hover:border-brand-orange/30 shadow-xs group"
              aria-label="Open Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white shadow-sm animate-pulse-subtle">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Order Button */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-orange/95 hover:shadow-md hover:scale-102 cursor-pointer active:scale-98"
            >
              Book Order
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
