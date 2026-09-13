'use client';

import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { footerLinks, locationInfo } from '@/lib/data';

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
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
    <footer className="bg-redwood-950 border-t border-redwood-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 mb-4"
              aria-label="Redwood Coffee home"
            >
              <Coffee className="w-8 h-8 text-amber-400" />
              <span className="font-serif text-xl font-bold text-cream">
                Redwood <span className="text-amber-400">Coffee</span>
              </span>
            </a>
            <p className="text-cream/50 text-sm leading-relaxed max-w-sm mb-6">
              Small-batch coffee roastery dedicated to ethically sourced beans,
              expert craftsmanship, and building community one cup at a time.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-redwood-900 hover:bg-amber-500 flex items-center justify-center text-cream/60 hover:text-redwood-950 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-cream/50 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-cream/50 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-cream/50 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{locationInfo.address}</span>
              </li>
              <li className="flex items-center gap-2 text-cream/50 text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{locationInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-cream/50 text-sm">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{locationInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-redwood-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Redwood Coffee. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/40">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
