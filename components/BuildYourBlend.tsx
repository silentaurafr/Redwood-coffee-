'use client';

import { useState, useMemo } from 'react';
import {
  Check,
  Minus,
  Plus,
  ShoppingCart,
  Mountain,
  Gauge,
  Flame,
  Package,
} from 'lucide-react';
import {
  roastLevels,
  coffeeOrigins,
  grindTypes,
  baseBlendPrice,
  blendPreviewImage,
} from '@/lib/data';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function BuildYourBlend() {
  const [roast, setRoast] = useState(roastLevels[1].id);
  const [origin, setOrigin] = useState(coffeeOrigins[0].id);
  const [grind, setGrind] = useState(grindTypes[0].id);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const selectedRoast = roastLevels.find((r) => r.id === roast)!;
  const selectedOrigin = coffeeOrigins.find((o) => o.id === origin)!;
  const selectedGrind = grindTypes.find((g) => g.id === grind)!;

  const unitPrice = useMemo(() => {
    return (
      baseBlendPrice +
      selectedRoast.priceModifier +
      selectedOrigin.priceModifier
    );
  }, [selectedRoast, selectedOrigin]);

  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <section
      id="build-your-blend"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden"
      aria-label="Build Your Blend"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Customizer
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-redwood-950 leading-tight mb-4">
            Build Your
            <span className="text-amber-600 italic"> Blend</span>
          </h2>
          <p className="text-redwood-800/70 text-lg max-w-2xl mx-auto">
            Choose your roast, origin, and grind — we&apos;ll roast it fresh and
            ship it to your door.
          </p>
        </div>

        <div
          className={cn(
            'grid lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-xl font-bold text-redwood-950">
                  Roast Level
                </h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {roastLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setRoast(level.id)}
                    className={cn(
                      'p-4 rounded-2xl border-2 text-left transition-all duration-300',
                      roast === level.id
                        ? 'border-amber-500 bg-amber-50 shadow-md'
                        : 'border-redwood-200 bg-white hover:border-amber-300'
                    )}
                    aria-pressed={roast === level.id}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-redwood-950 text-sm">
                        {level.label}
                      </span>
                      {roast === level.id && (
                        <Check className="w-4 h-4 text-amber-600" />
                      )}
                    </div>
                    <p className="text-xs text-redwood-800/60 leading-relaxed">
                      {level.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-xl font-bold text-redwood-950">
                  Origin
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {coffeeOrigins.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setOrigin(opt.id)}
                    className={cn(
                      'p-4 rounded-2xl border-2 text-left transition-all duration-300',
                      origin === opt.id
                        ? 'border-amber-500 bg-amber-50 shadow-md'
                        : 'border-redwood-200 bg-white hover:border-amber-300'
                    )}
                    aria-pressed={origin === opt.id}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="font-semibold text-redwood-950 text-sm block">
                          {opt.country}
                        </span>
                        <span className="text-xs text-redwood-800/60">
                          {opt.region}
                        </span>
                      </div>
                      {origin === opt.id && (
                        <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-redwood-800/50">
                      <span className="flex items-center gap-1">
                        <Gauge className="w-3 h-3" />
                        {opt.elevation}
                      </span>
                    </div>
                    <p className="text-xs text-redwood-800/60 mt-1 italic">
                      {opt.tastingNotes}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-xl font-bold text-redwood-950">
                  Grind Type
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {grindTypes.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGrind(g.id)}
                    className={cn(
                      'px-4 py-2.5 rounded-full text-sm font-medium border-2 transition-all duration-300',
                      grind === g.id
                        ? 'border-amber-500 bg-amber-500 text-redwood-950'
                        : 'border-redwood-200 bg-white text-redwood-800 hover:border-amber-300'
                    )}
                    aria-pressed={grind === g.id}
                    title={g.description}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-redwood-800/50 mt-2">
                {selectedGrind.description}
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-3xl shadow-2xl shadow-redwood-950/10 border border-redwood-100 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blendPreviewImage}
                  alt="Your custom coffee blend preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-redwood-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-amber-500 text-redwood-950 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Your Custom Blend
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-cream">
                    {selectedOrigin.country} {selectedRoast.label}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-cream rounded-xl p-3">
                    <Flame className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                    <p className="text-xs text-redwood-800/60">Roast</p>
                    <p className="text-sm font-semibold text-redwood-950">
                      {selectedRoast.label.replace(' Roast', '')}
                    </p>
                  </div>
                  <div className="bg-cream rounded-xl p-3">
                    <Mountain className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                    <p className="text-xs text-redwood-800/60">Origin</p>
                    <p className="text-sm font-semibold text-redwood-950">
                      {selectedOrigin.country}
                    </p>
                  </div>
                  <div className="bg-cream rounded-xl p-3">
                    <Package className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                    <p className="text-xs text-redwood-800/60">Grind</p>
                    <p className="text-sm font-semibold text-redwood-950">
                      {selectedGrind.label}
                    </p>
                  </div>
                </div>

                <div className="bg-cream rounded-xl p-4">
                  <p className="text-xs text-redwood-800/60 mb-1">
                    Tasting Notes
                  </p>
                  <p className="text-sm font-medium text-redwood-950 italic">
                    {selectedOrigin.tastingNotes}
                  </p>
                  <p className="text-xs text-redwood-800/60 mt-2">
                    {selectedRoast.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-redwood-800/70">
                    Quantity
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 h-9 rounded-full bg-cream hover:bg-redwood-100 flex items-center justify-center text-redwood-950 transition-colors disabled:opacity-40"
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-bold text-redwood-950 w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      className="w-9 h-9 rounded-full bg-cream hover:bg-redwood-100 flex items-center justify-center text-redwood-950 transition-colors disabled:opacity-40"
                      disabled={quantity >= 10}
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="border-t border-redwood-100 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-redwood-800/60">Total Price</p>
                      <p className="font-serif text-3xl font-bold text-redwood-950">
                        ${totalPrice.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-xs text-redwood-800/50 text-right">
                      ${unitPrice.toFixed(2)} per bag
                      <br />
                      12 oz each
                    </p>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95',
                      addedToCart
                        ? 'bg-sage-600 text-cream'
                        : 'bg-amber-500 hover:bg-amber-400 text-redwood-950 hover:shadow-lg hover:shadow-amber-500/30'
                    )}
                  >
                    {addedToCart ? (
                      <>
                        <Check className="w-5 h-5" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
