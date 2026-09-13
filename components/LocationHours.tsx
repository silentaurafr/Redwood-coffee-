'use client';

import { MapPin, Phone, Mail, Clock, Calendar, Coffee } from 'lucide-react';
import { locationInfo } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function LocationHours() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 bg-cream relative overflow-hidden"
      aria-label="Location and hours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-redwood-950 leading-tight">
            Find Your
            <span className="text-amber-600 italic"> Table</span>
          </h2>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-lg border border-redwood-100 overflow-hidden">
              <div className="relative h-72 lg:h-80">
                <iframe
                  src={locationInfo.mapEmbedSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Redwood Coffee location map"
                />
              </div>
              <div className="p-6 grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-redwood-950 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-redwood-800/60 font-medium uppercase tracking-wide">
                      Address
                    </p>
                    <p className="text-sm text-redwood-950 font-medium mt-1">
                      {locationInfo.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-redwood-950 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-redwood-800/60 font-medium uppercase tracking-wide">
                      Phone
                    </p>
                    <p className="text-sm text-redwood-950 font-medium mt-1">
                      {locationInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-redwood-950 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-redwood-800/60 font-medium uppercase tracking-wide">
                      Email
                    </p>
                    <p className="text-sm text-redwood-950 font-medium mt-1">
                      {locationInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-redwood-100 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-xl font-bold text-redwood-950">
                  Opening Hours
                </h3>
              </div>
              <div className="divide-y divide-redwood-100">
                {locationInfo.hours.map((entry) => {
                  const today = new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                  });
                  const isToday = entry.day === today;
                  return (
                    <div
                      key={entry.day}
                      className={`flex items-center justify-between py-3 px-3 rounded-lg transition-colors ${
                        isToday ? 'bg-amber-50' : ''
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          isToday
                            ? 'text-amber-700'
                            : 'text-redwood-800/70'
                        }`}
                      >
                        {entry.day}
                        {isToday && (
                          <span className="ml-2 text-xs bg-amber-500 text-redwood-950 px-2 py-0.5 rounded-full font-semibold">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={`text-sm ${
                          isToday
                            ? 'text-amber-700 font-semibold'
                            : 'text-redwood-800/60'
                        }`}
                      >
                        {entry.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-redwood-950 rounded-3xl shadow-lg p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif text-xl font-bold text-cream">
                    Weekly Events
                  </h3>
                </div>
                <div className="space-y-3">
                  {locationInfo.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-redwood-900/40 hover:bg-redwood-900/60 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                        <span className="text-xs font-bold text-amber-400 group-hover:text-redwood-950 transition-colors">
                          {event.day}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-cream truncate">
                          {event.title}
                        </p>
                        <p className="text-xs text-cream/50 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-amber-500 rounded-3xl shadow-lg p-6 lg:p-8 text-center">
              <Coffee className="w-10 h-10 text-redwood-950 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-redwood-950 mb-2">
                Want to host an event?
              </h3>
              <p className="text-sm text-redwood-900/70 mb-4">
                Our space is available for private bookings after hours.
              </p>
              <a
                href={`mailto:${locationInfo.email}`}
                className="inline-block bg-redwood-950 text-cream font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-redwood-900 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
