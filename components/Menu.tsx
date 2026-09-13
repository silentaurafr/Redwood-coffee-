'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const { ref, isVisible } = useScrollAnimation();

  const activeItems =
    menuCategories.find((cat) => cat.id === activeCategory)?.items ?? [];

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 lg:py-32 bg-redwood-950 relative overflow-hidden"
      aria-label="Menu"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream leading-tight mb-4">
            Crafted with
            <span className="text-amber-400 italic"> Intention</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Every drink is made to order with precision and care. Explore by
            category and find your new favorite.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                activeCategory === category.id
                  ? 'bg-amber-500 text-redwood-950 shadow-lg shadow-amber-500/20'
                  : 'bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream'
              )}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          key={activeCategory}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in"
        >
          {activeItems.map((item, index) => (
            <article
              key={item.name}
              className="group bg-redwood-900/40 border border-redwood-800/40 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-redwood-950/80 to-transparent" />
                <div className="absolute bottom-3 right-3 bg-amber-500 text-redwood-950 font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
                  ${item.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
