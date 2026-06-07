"use client";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-brand-dark px-4 py-20 text-white">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-102"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-15" 
           style={{
             backgroundImage: `radial-gradient(circle, rgba(232,93,4,0.15) 2px, transparent 2px)`,
             backgroundSize: "32px 32px"
           }} 
      />

      {/* Floating Blobs (Background animations) */}
      <div className="absolute -top-40 -left-40 z-10 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 z-10 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-brand-gold uppercase backdrop-blur-xs">
          🇳🇬 Proudly Nigerian • Ibadan
        </span>
        
        <h1 className="mb-6 font-serif text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
          Happyfoods <span className="text-brand-orange">Treats</span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-3xl font-sans text-lg font-medium text-brand-cream/90 md:text-xl md:leading-relaxed">
          Ibadan’s finest food delivery service, serving freshly prepared meals, small chops, premium parfaits, platters, refreshing drinks, and more—delivered with happiness.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-brand-orange/90 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
          >
            Browse Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="ml-2 h-5 w-5 animate-pulse"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-dark hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
          >
            Book An Order
          </button>
        </div>

        {/* Info Banner */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-brand-gold sm:text-3xl">30 Mins</span>
            <span className="text-xs text-brand-cream/70 uppercase tracking-widest font-semibold mt-1">Average Response</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-brand-gold sm:text-3xl">100%</span>
            <span className="text-xs text-brand-cream/70 uppercase tracking-widest font-semibold mt-1">Homemade Quality</span>
          </div>
          <div className="col-span-2 flex flex-col items-center sm:col-span-1">
            <span className="text-2xl font-bold text-brand-gold sm:text-3xl">WhatsApp</span>
            <span className="text-xs text-brand-cream/70 uppercase tracking-widest font-semibold mt-1">Confirmations</span>
          </div>
        </div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-8 bg-brand-cream" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />
    </section>
  );
}
