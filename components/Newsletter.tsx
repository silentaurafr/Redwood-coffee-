'use client';

import { useState } from 'react';
import { Mail, Check, AlertCircle, Gift } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

type Status = 'idle' | 'success' | 'error';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { ref, isVisible } = useScrollAnimation();

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setErrorMessage('');
    setEmail('');
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-gradient-to-br from-redwood-950 to-redwood-900 relative overflow-hidden"
      aria-label="Newsletter signup"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl" />

      <div
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Gift className="w-4 h-4" />
          Get 15% off your first order
        </div>

        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream leading-tight mb-4">
          Join the
          <span className="text-amber-400 italic"> Redwood Family</span>
        </h2>
        <p className="text-cream/60 text-lg mb-8 max-w-xl mx-auto">
          Subscribe for brewing tips, new roast alerts, and exclusive offers —
          delivered fresh to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-sage-600/20 border border-sage-400/40 rounded-2xl p-6 animate-scale-in">
            <div className="w-14 h-14 rounded-full bg-sage-500/30 flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 text-sage-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-cream mb-2">
              Welcome to the family!
            </h3>
            <p className="text-cream/60 text-sm">
              Check your inbox for a 15% off code and our beginner&apos;s
              brewing guide.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-amber-400 hover:text-amber-300 text-sm font-medium underline underline-offset-4 transition-colors"
            >
              Sign up another email
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-redwood-800/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-full bg-cream text-redwood-950 placeholder:text-redwood-800/40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  aria-label="Email address"
                  aria-invalid={status === 'error'}
                />
              </div>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-redwood-950 font-semibold px-6 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 mt-4 text-terracotta-300 animate-fade-in">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{errorMessage}</span>
              </div>
            )}

            <p className="text-cream/30 text-xs mt-4">
              No spam, just coffee. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
