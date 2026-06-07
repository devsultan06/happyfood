"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import CartDrawer from "@/components/CartDrawer";
import BookingModal from "@/components/BookingModal";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Footer from "@/components/Footer";
import { Product } from "@/lib/products";

export default function Home() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const currentQty = prev[product.id] || 0;
      return { ...prev, [product.id]: currentQty + 1 };
    });
  };

  const handleRemoveFromCart = (product: Product) => {
    setCart((prev) => {
      const currentQty = prev[product.id] || 0;
      if (currentQty <= 1) {
        const nextCart = { ...prev };
        delete nextCart[product.id];
        return nextCart;
      }
      return { ...prev, [product.id]: currentQty - 1 };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <>
      {/* Sticky Header Navbar */}
      <Navbar
        cartCount={cartCount}
        onCartToggle={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Categories Menu section */}
        <MenuSection
          cart={cart}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />

        {/* CEO Profile and Brand Story Section */}
        <AboutSection />

        {/* Customer Testimonials Carousel/Grid */}
        <Testimonials />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Sticky WhatsApp Contact Button */}
      <WhatsAppFloating />

      {/* Side Shopping Cart Panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsBookingOpen(true);
        }}
      />

      {/* Booking Form Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        cart={cart}
        onClearCart={handleClearCart}
      />
    </>
  );
}
