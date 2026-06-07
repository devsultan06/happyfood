"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-24 sm:px-6 lg:px-8 border-t border-brand-orange/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: Clean CEO Portrait */}
          <div className="flex justify-center">
            {/* Main Portrait Container */}
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-brand-orange/10 bg-brand-cream shadow-md transition-shadow duration-300">
              <Image
                src="/images/ceo.png"
                alt="CEO of Happyfoods Treats"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-brand-dark/95 backdrop-blur-xs px-4 py-3 border border-white/10 shadow-lg text-white">
                <p className="text-xs font-bold text-brand-gold uppercase tracking-widest leading-none">
                  CEO & Head Chef
                </p>
                <p className="mt-1 font-serif text-sm font-bold tracking-wide">
                  Happyfoods Treats
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Story and Stats */}
          <div className="space-y-8 lg:pl-6">
            <div>
              <span className="text-sm font-bold text-brand-orange uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="mt-2 font-serif text-3xl font-extrabold text-brand-dark sm:text-4xl">
                The Heart Behind the Kitchen
              </h2>
            </div>

            <div className="font-sans text-sm font-medium text-brand-dark/70 sm:text-base leading-relaxed space-y-4">
              <p>
                Happyfoods Treats is your go-to for delicious, home-cooked Nigerian meals delivered fresh to your door. From boutique event catering and custom party platters in Ibadan, to satisfying your daily cravings, we've got you covered.
              </p>
              <div className="bg-brand-orange/5 border border-brand-orange/15 rounded-2xl p-5 mt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-3">Our Boutique Services:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-brand-dark/90">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Food Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Yummy Parfait in Bulk
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Small Chops & Grills
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Frozen Foods
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Breakfast & Lunch Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Soups in Bowls
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Outdoor Catering Events
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Food Tray Surprises
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 text-brand-orange shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Cooking Classes (Online & Physical)
                  </li>
                </ul>
              </div>
            </div>

            <blockquote className="relative rounded-2xl bg-brand-cream/50 border-l-4 border-brand-orange p-5 italic font-medium text-brand-dark/80 text-xs sm:text-sm">
              "Cooking is love made visible. Every meal we prepare at Happyfoods Treats is crafted with the highest hygiene standards, authentic ingredients, and a dash of home-cooked warmth."
            </blockquote>

            {/* Stats list */}
            <div className="grid grid-cols-3 gap-4 border-t border-brand-cream pt-8">
              <div>
                <span className="block text-2xl font-extrabold text-brand-orange sm:text-3xl">500+</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-brand-dark/50">
                  Happy Clients
                </span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-brand-orange sm:text-3xl">2+ Yrs</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-brand-dark/50">
                  Delivering Joy
                </span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-brand-orange sm:text-3xl">10+</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-brand-dark/50">
                  Daily Menu Choices
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
