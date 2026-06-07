"use client";

import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Funmi Adebayo",
      location: "Ikeja, Lagos",
      avatar: "https://i.pravatar.cc/80?img=5",
      rating: 5,
      review: "The Jollof Rice bowl was incredible! It got to my doorstep still steaming hot, and the peppered beef was so tender and flavorful. Happyfoods is now my official catering plug!",
    },
    {
      id: 2,
      name: "Tobi Olatunji",
      location: "Bodija, Ibadan",
      avatar: "https://i.pravatar.cc/80?img=12",
      rating: 5,
      review: "Absolutely in love with their Parfaits! The 330ml cup is so loaded with nuts and strawberries. Perfect snack for hot afternoons. Will definitely order again next week.",
    },
    {
      id: 3,
      name: "Chioma Nze",
      location: "Lekki, Lagos",
      avatar: "https://i.pravatar.cc/80?img=47",
      rating: 5,
      review: "We ordered the Diamond Combo flyer package for my sister's birthday gathering, and everybody kept asking who did the small chops. The puff-puff was so soft and sweet. 10/10!",
    },
    {
      id: 4,
      name: "Yinka Balogun",
      location: "Akobo, Ibadan",
      avatar: "https://i.pravatar.cc/80?img=68",
      rating: 5,
      review: "Clean raw proteins! I regularly buy their raw chicken fillets and drumsticks per kg. They dress it so clean that you don't even need to wash too much before cooking. Real lifesaver.",
    },
  ];

  return (
    <section id="testimonials" className="bg-brand-cream/40 px-4 py-24 sm:px-6 lg:px-8 border-t border-brand-orange/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-orange uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-2 font-serif text-3xl font-extrabold text-brand-dark sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xs font-semibold text-brand-dark/60 leading-relaxed">
            Real feedback from food lovers across Lagos and Ibadan who order Happyfoods_Treats.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card flex flex-col justify-between p-6 rounded-3xl transition-transform duration-300 hover:-translate-y-1 shadow-xs"
            >
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 text-brand-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 2.903a.75.75 0 0 1 1.424 0l2.082 5.006 5.404.434a.75.75 0 0 1 .416 1.328l-4.04 3.583 1.157 5.34a.75.75 0 0 1-1.096.796L12 16.518l-4.802 2.622a.75.75 0 0 1-1.096-.796l1.157-5.34-4.04-3.583a.75.75 0 0 1 .417-1.328l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-xs font-medium text-brand-dark/80 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-6 flex items-center gap-3 border-t border-brand-cream pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-orange/15">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark leading-none">{t.name}</h4>
                  <span className="text-[10px] font-semibold text-brand-dark/50 mt-1 block">
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
