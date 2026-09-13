'use client';

import { featureCards } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-redwood-950 relative overflow-hidden"
      aria-label="Why Redwood Coffee"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Why Redwood
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream leading-tight">
            More Than Just
            <span className="text-amber-400 italic"> Coffee</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative bg-redwood-900/40 border border-redwood-800/40 rounded-2xl p-8 text-center hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-5 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500">
                  <card.icon className="w-8 h-8 text-amber-400 group-hover:text-redwood-950 transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-cream mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
