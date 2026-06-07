"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "@/lib/products";
import ProductCard from "./ProductCard";

interface MenuSectionProps {
  cart: { [key: string]: number };
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
}

type CategoryFilter = "all" | "meals" | "chops_platters" | "drinks_parfait" | "raw_protein" | "combos";

export default function MenuSection({ cart, onAdd, onRemove }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: "All", value: "all" },
    { label: "Meals", value: "meals" },
    { label: "Chops & Platters", value: "chops_platters" },
    { label: "Drinks & Parfait", value: "drinks_parfait" },
    { label: "Raw Protein", value: "raw_protein" },
    { label: "Combos", value: "combos" },
  ];

  // Filter products based on search and active category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="food-pattern px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-orange uppercase tracking-widest">
            Explore Flavors
          </span>
          <h2 className="mt-2 font-serif text-3xl font-extrabold text-brand-dark sm:text-4xl lg:text-5xl">
            Order From Our Catalog
          </h2>
          <p className="mt-4 text-sm font-medium text-brand-dark/70 sm:text-base leading-relaxed">
            Freshly prepared Nigerian meals, artisanal parfaits, catering platters, raw chicken cuts, and delicious budget combos.
          </p>
        </div>

        {/* Filter & Search Bar container */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-brand-orange/10 pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                  activeCategory === category.value
                    ? "bg-brand-orange text-white shadow-xs"
                    : "bg-white border border-brand-orange/10 text-brand-dark hover:border-brand-orange/30 hover:bg-brand-cream"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-brand-dark/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21-21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search jollof, parfait, platter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-brand-orange/15 bg-white py-3 pl-11 pr-4 text-xs font-medium text-brand-dark placeholder-brand-dark/40 shadow-xs outline-hidden transition-all duration-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-brand-dark/40 hover:text-brand-orange cursor-pointer"
                aria-label="Clear Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={cart[product.id] || 0}
                onAdd={() => onAdd(product)}
                onRemove={() => onRemove(product)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-brand-orange/25 bg-white py-16 px-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto h-12 w-12 text-brand-orange/40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M9 10.5h.008v.008H9V10.5Zm6 0h.008v.008H15V10.5Zm12 1.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mt-4 font-serif text-lg font-bold text-brand-dark">No products found</h3>
            <p className="mt-2 text-xs font-semibold text-brand-dark/60 max-w-sm">
              We couldn't find any items matching your filters or search keywords. Try adjusting your query or category selection.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-6 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-brand-orange/95 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
