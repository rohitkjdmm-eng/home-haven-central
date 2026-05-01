import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  label: string;
}

interface HeroGalleryProps {
  slides: Slide[];
}

export const HeroGallery = ({ slides }: HeroGalleryProps) => {
  const [idx, setIdx] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 4500);
    return () => clearInterval(t);
  }, [total]);

  const go = (dir: number) => setIdx((i) => (i + dir + total) % total);

  return (
    <div className="relative w-full">
      <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-gold/40 hidden md:block" />
      <div className="relative rounded-2xl overflow-hidden shadow-luxury bg-primary/40">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              className="w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-cover shrink-0"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
              width={1280}
              height={832}
            />
          ))}
        </div>

        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

        {/* Top ribbon */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-gradient-gold text-gold-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-gold flex items-center gap-1.5 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" /> Only 3 Units Left
        </div>

        {/* Slide label */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/20 backdrop-blur-md border border-gold/30 text-background text-[10px] md:text-xs font-medium z-10">
          {slides[idx].label}
        </div>

        {/* Bottom price */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 z-10">
          <div className="px-3 py-2 md:px-4 md:py-3 rounded-xl bg-background/15 border border-gold/40 backdrop-blur-md text-background">
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gold/90">Starting Price</p>
            <p className="font-display text-xl md:text-3xl font-bold text-shimmer-gold">₹1.25 Cr*</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-xl bg-background/15 border border-gold/30 backdrop-blur-md text-background text-xs">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
            <span className="ml-1 font-medium">500+ Families</span>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-md border border-gold/30 text-background flex items-center justify-center transition-smooth z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-md border border-gold/30 text-background flex items-center justify-center transition-smooth z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-gold" : "w-1.5 bg-background/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
