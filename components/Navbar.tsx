'use client';

import { useState, useEffect } from 'react';
import { Coffee, Menu, X, ShoppingBag } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-redwood-950/95 backdrop-blur-md shadow-lg shadow-redwood-950/20 py-3'
          : 'bg-transparent py-5'
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
            aria-label="Redwood Coffee home"
          >
            <div className="relative">
              <Coffee
                className={cn(
                  'w-8 h-8 transition-colors duration-300',
                  isScrolled ? 'text-amber-400' : 'text-amber-300'
                )}
              />
            </div>
            <span
              className={cn(
                'font-serif text-xl font-bold tracking-tight transition-colors duration-300',
                isScrolled ? 'text-cream' : 'text-cream'
              )}
            >
              Redwood
              <span className="text-amber-400"> Coffee</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group',
                  isScrolled
                    ? 'text-cream/80 hover:text-amber-400'
                    : 'text-cream/90 hover:text-amber-300'
                )}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-redwood-950 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-cream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-redwood-950/98 backdrop-blur-md px-4 py-6 mx-4 mt-3 rounded-2xl border border-redwood-800/50">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-cream/80 hover:text-amber-400 hover:bg-redwood-900/50 rounded-xl transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-redwood-950 font-semibold px-5 py-3 rounded-full transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
