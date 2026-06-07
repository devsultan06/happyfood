"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark text-white pt-20 pb-10 overflow-hidden food-pattern-dark">
      {/* Wave divider top */}
      <div 
        className="absolute top-0 left-0 right-0 h-6 bg-brand-cream" 
        style={{ clipPath: "ellipse(60% 100% at 50% 0%)" }} 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
          
          {/* Brand & Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/images/happyfoods-logo.png"
                  alt="Happyfoods Treats Logo"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-tight text-white sm:text-lg">
                  Happyfoods <span className="text-brand-orange">Treats</span>
                </span>
                <span className="text-[9px] font-medium tracking-widest uppercase text-brand-gold">
                  Delivering Happiness
                </span>
              </div>
            </div>
            <p className="text-xs font-semibold text-white/60 leading-relaxed max-w-xs">
              Your premium plug for delicious, home-cooked Nigerian dishes, chops, platters, and parfaits delivered fresh.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Quick Links
            </h4>
            <ul className="text-xs font-semibold space-y-2.5">
              <li>
                <a href="#" className="text-white/70 transition-colors hover:text-brand-orange">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 transition-colors hover:text-brand-orange">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 transition-colors hover:text-brand-orange">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 transition-colors hover:text-brand-orange">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Contacts Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Say Hello
            </h4>
            <ul className="text-xs font-semibold space-y-3">
              <li>
                <a
                  href="https://instagram.com/Happyfoods_Treats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand-orange"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                  @Happyfoods_Treats
                </a>
              </li>
              <li>
                <a
                  href="mailto:titilayohappiness@yahoo.com"
                  className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand-orange"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  titilayohappiness@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348142822635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand-orange"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.972C16.587 1.913 14.12 .887 11.498.887a9.85 9.85 0 0 0-9.87 9.86c-.001 1.737.47 3.427 1.365 4.918L1.93 21.03l5.52-1.446c-.733-.357-1.12-.55-1.12-.55zM17.522 14.37c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.676.15-.199.3-.772.975-.947 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.778-1.665-2.078-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.235-.244-.589-.493-.51-.676-.519-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.11 4.52.714.31 1.272.495 1.708.635.717.228 1.37.195 1.887.118.577-.087 1.771-.725 2.021-1.425.25-.7.25-1.3 0-1.45z" />
                  </svg>
                  WhatsApp: +234 814 282 2635
                </a>
              </li>
            </ul>
          </div>

          {/* Location details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Our Location
            </h4>
            <div className="text-xs font-semibold text-white/70 space-y-2.5 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="shrink-0 text-sm mt-0.5">📍</span>
                <span>10, Morohunmubo Street Beside M&P Pure Waters, Bashorun, Ibadan</span>
              </p>
              <p className="text-[10px] text-brand-orange mt-2 uppercase tracking-wider font-extrabold">
                *Deliveries across Ibadan & Lagos*
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] font-semibold text-white/50">
          <p>© {currentYear} Happyfoods Treats. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-orange">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
