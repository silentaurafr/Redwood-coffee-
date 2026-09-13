'use client';

import { Quote } from 'lucide-react';
import { aboutImage, aboutImageSecondary, aboutFeatures, founderQuote } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 bg-cream relative overflow-hidden"
      aria-label="About Redwood Coffee"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-redwood-950/20">
              <img
                src={aboutImage}
                alt="Freshly roasted coffee beans"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-cream hidden sm:block">
              <img
                src={aboutImageSecondary}
                alt="Barista creating latte art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 left-10 w-32 h-32 bg-sage-400/20 rounded-full blur-3xl" />
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-redwood-950 leading-tight mb-6">
              A Roastery Built on
              <span className="text-amber-600 italic"> Passion</span>
            </h2>
            <p className="text-redwood-800/80 text-lg leading-relaxed mb-8">
              Redwood Coffee began with a simple belief: that a great cup of
              coffee can change the shape of a day. What started as a small
              roaster in a Portland garage has grown into a beloved community
              gathering place — but our obsession with quality hasn&apos;t
              changed one bit.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {aboutFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex gap-4 p-4 rounded-2xl hover:bg-cream-dark/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-redwood-950 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-amber-400 group-hover:text-redwood-950 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-redwood-950 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-redwood-800/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative bg-redwood-950 rounded-2xl p-6 lg:p-8 overflow-hidden">
              <Quote className="absolute top-4 right-4 w-16 h-16 text-amber-500/10" />
              <blockquote className="text-cream/90 text-lg font-serif italic leading-relaxed mb-4 relative z-10">
                &ldquo;{founderQuote.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-0.5 bg-amber-500" />
                <div>
                  <p className="text-amber-400 font-semibold text-sm">
                    {founderQuote.name}
                  </p>
                  <p className="text-cream/50 text-xs">{founderQuote.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
