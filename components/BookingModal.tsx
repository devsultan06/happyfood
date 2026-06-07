"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "@/lib/products";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [key: string]: number };
  onClearCart: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  cart,
  onClearCart,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    address: "",
    deliveryDate: "",
    deliveryTime: "",
    instructions: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  if (!isOpen) return null;

  // Compile cart details
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formulate WhatsApp message text
    const itemsText = cartItems
      .map((item) => `- ${item.quantity}x ${item.product.name} (${formatPrice(item.product.price * item.quantity)})`)
      .join("\n");

    const messageText = `Hello Happyfoods_Treats! 🍽️

I'd like to place an order:

*🛍️ ORDER ITEMS:*
${itemsText}

*💰 SUBTOTAL:* ${formatPrice(subtotal)}
_(Delivery fee to be confirmed based on address)_

*🚚 DELIVERY DETAILS:*
- *Name:* ${formData.fullName}
- *Phone:* ${formData.phone}
- *WhatsApp:* ${formData.whatsapp || formData.phone}
- *Address:* ${formData.address}
- *Date:* ${formData.deliveryDate}
- *Time:* ${formData.deliveryTime}

*📝 SPECIAL INSTRUCTIONS:*
${formData.instructions || "None"}

Thank you!`;

    const encodedText = encodeURIComponent(messageText);
    const generatedLink = `https://wa.me/2348142822635?text=${encodedText}`;

    setWaLink(generatedLink);
    setIsSubmitted(true);

    // Automatically try to open in a new tab
    window.open(generatedLink, "_blank");
  };

  const handleSuccessClose = () => {
    setIsSubmitted(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Modal Panel */}
        <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl transition-all duration-300 md:p-8 z-10 max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rounded-full p-1.5 text-brand-dark/50 hover:bg-brand-cream hover:text-brand-dark transition-colors cursor-pointer"
            aria-label="Close Modal"
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

          {!isSubmitted ? (
            <>
              {/* Form Header */}
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-extrabold text-brand-dark sm:text-3xl">
                  Complete Your Booking
                </h2>
                <p className="mt-1 text-xs font-semibold text-brand-dark/60">
                  Fill in your details below. We'll transfer your basket to WhatsApp to finalize the order & confirm delivery fees.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Tunde Alao"
                      className="w-full rounded-2xl border border-brand-orange/15 bg-brand-cream/30 px-4 py-3 text-xs font-semibold text-brand-dark outline-hidden transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 08142822635"
                      className="w-full rounded-2xl border border-brand-orange/15 bg-brand-cream/30 px-4 py-3 text-xs font-semibold text-brand-dark outline-hidden transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-2">
                      WhatsApp Number (If different)
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="e.g. 08142822635"
                      className="w-full rounded-2xl border border-brand-orange/15 bg-brand-cream/30 px-4 py-3 text-xs font-semibold text-brand-dark outline-hidden transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15"
                    />
                  </div>
                  
                  {/* Delivery Date & Time */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        required
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-brand-orange/15 bg-brand-cream/30 px-3 py-3 text-xs font-semibold text-brand-dark outline-hidden transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-2">
                        Time *
                      </label>
                      <input
                        type="time"
                        name="deliveryTime"
                        required
                        value={formData.deliveryTime}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-brand-orange/15 bg-brand-cream/30 px-3 py-3 text-xs font-semibold text-brand-dark outline-hidden transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. Flat 4, Block C, Mende Villa, Maryland, Lagos"
                    className="w-full rounded-2xl border border-brand-orange/15 bg-brand-cream/30 px-4 py-3 text-xs font-semibold text-brand-dark outline-hidden transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15"
                  />
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark/80 mb-2">
                    Special Instructions / Customizations
                  </label>
                  <textarea
                    name="instructions"
                    rows={2}
                    value={formData.instructions}
                    onChange={handleInputChange}
                    placeholder="e.g. Make Jollof extra spicy, Parfait without raisins, etc."
                    className="w-full rounded-2xl border border-brand-orange/15 bg-brand-cream/30 px-4 py-3 text-xs font-semibold text-brand-dark outline-hidden transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15 resize-none"
                  />
                </div>

                {/* Basket summary inside form */}
                <div className="rounded-2xl border border-brand-orange/10 bg-brand-cream/40 p-5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                    Basket Summary
                  </h4>
                  <ul className="text-xs font-medium space-y-2 max-h-32 overflow-y-auto pr-2">
                    {cartItems.map((item) => (
                      <li key={item.product.id} className="flex justify-between items-center text-brand-dark/80">
                        <span>
                          {item.quantity}x {item.product.name}
                        </span>
                        <span className="font-bold">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center border-t border-brand-orange/10 pt-3 text-brand-dark">
                    <span className="text-xs font-bold">Total (Excluding Delivery)</span>
                    <span className="text-sm font-extrabold text-brand-orange">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-brand-orange py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-orange/95 hover:shadow-lg cursor-pointer"
                >
                  Confirm Order & Message on WhatsApp
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="ml-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </form>
            </>
          ) : (
            /* SUCCESS MESSAGE MODAL SCREEN */
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-6 animate-pulse-subtle">
              <div className="rounded-full bg-brand-green/10 p-5 text-brand-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-14 w-14"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-extrabold text-brand-dark">
                  Order Details Prepared!
                </h2>
                <p className="mt-2 text-xs font-semibold text-brand-dark/70 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been formatted. We have attempted to open WhatsApp to finalize your delivery date and fee.
                </p>
                <p className="mt-1 text-xs font-extrabold text-brand-orange">
                  We'll confirm your details on WhatsApp within 30 minutes.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full max-w-sm pt-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-4 text-xs font-bold text-white shadow-md transition-all hover:bg-brand-green/95 hover:shadow-lg cursor-pointer"
                >
                  <svg
                    className="mr-2 h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.972C16.587 1.913 14.12 .887 11.498.887a9.85 9.85 0 0 0-9.87 9.86c-.001 1.737.47 3.427 1.365 4.918L1.93 21.03l5.52-1.446c-.733-.357-1.12-.55-1.12-.55zM17.522 14.37c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.676.15-.199.3-.772.975-.947 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.778-1.665-2.078-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.235-.244-.589-.493-.51-.676-.519-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.11 4.52.714.31 1.272.495 1.708.635.717.228 1.37.195 1.887.118.577-.087 1.771-.725 2.021-1.425.25-.7.25-1.3 0-1.45z" />
                  </svg>
                  Open WhatsApp Again
                </a>
                <button
                  onClick={handleSuccessClose}
                  className="rounded-full border border-brand-orange/20 bg-white py-3.5 text-xs font-bold text-brand-dark transition hover:bg-brand-cream cursor-pointer"
                >
                  Done & Clear Basket
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
