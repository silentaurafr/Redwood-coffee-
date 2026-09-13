'use client';

import { ChevronDown, ArrowRight, Coffee } from 'lucide-react';
import { heroImage } from '@/lib/data';

export default function Hero() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Warm and inviting Redwood Coffee shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-redwood-950/80 via-redwood-950/50 to-redwood-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-redwood-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          <Coffee className="w-4 h-4" />
          Small-batch roastery since 2015
        </div>

        <h1 className="animate-fade-in-up font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-[1.1] tracking-tight text-balance mb-6" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Coffee Worth
          <br />
          <span className="text-amber-400 italic">Waking Up For</span>
        </h1>

        <p className="animate-fade-in-up text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.2s', opacity: 0 }}>
          From single-origin beans to hand-crafted espresso — every cup is a
          ritual. Explore our menu or build a blend that&apos;s uniquely yours.
        </p>

        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, '#menu')}
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-redwood-950 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 active:scale-95"
          >
            Explore Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#build-your-blend"
            onClick={(e) => handleNavClick(e, '#build-your-blend')}
            className="group inline-flex items-center gap-2 bg-cream/10 hover:bg-cream/20 border border-cream/30 text-cream font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Build Your Blend
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => handleNavClick(e, '#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-scroll-bounce" />
      </a>
    </section>
  );
}
