'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const active = testimonials[currentIndex];

  return (
    <section
      className="py-24 lg:py-32 bg-gradient-to-b from-cream-dark to-cream relative overflow-hidden"
      aria-label="Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-200/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-redwood-950 leading-tight">
            Loved by
            <span className="text-amber-600 italic"> Coffee Lovers</span>
          </h2>
        </div>

        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-xl shadow-redwood-950/5 border border-redwood-100 p-8 lg:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-amber-100" />

            <div
              key={currentIndex}
              className="relative animate-fade-in-up"
            >
              <div className="flex gap-1 mb-6 justify-center">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              <blockquote className="font-serif text-xl lg:text-2xl text-redwood-950 italic text-center leading-relaxed mb-8 text-balance">
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-300"
                />
                <div className="text-left">
                  <p className="font-bold text-redwood-950">{active.name}</p>
                  <p className="text-sm text-redwood-800/60">{active.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-redwood-200 hover:bg-amber-500 hover:border-amber-500 hover:text-redwood-950 text-redwood-800 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'bg-amber-500 w-8'
                      : 'bg-redwood-200 hover:bg-redwood-300 w-2'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-redwood-200 hover:bg-amber-500 hover:border-amber-500 hover:text-redwood-950 text-redwood-800 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
