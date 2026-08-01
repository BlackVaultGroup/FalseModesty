import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>(200);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32 md:pt-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div ref={titleRef}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-rich-black leading-[1.1] mb-6">
            FALSE<br />MODESTY<br />ASIDE
          </h1>
          <p className="text-secondary-gray text-lg md:text-xl font-light leading-relaxed mb-4 max-w-lg">
            "A bold exploration of confidence, humility, and the courage to embrace your true potential."
          </p>
          <p className="text-secondary-gray text-base leading-relaxed mb-10 max-w-lg">
            In a world that rewards self-deprecation and punishes ambition, this book challenges you to step fully into who you are—without apology, without pretense, and without false modesty.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#buy" className="btn-primary">Order Now</a>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
        </div>

        <div ref={imageRef} className="flex justify-center lg:justify-end">
          <div className="animate-float">
            <div className="w-72 md:w-80 lg:w-96 aspect-[2/3] bg-rich-black flex items-center justify-center rounded-sm shadow-2xl">
              <div className="text-center px-8">
                <div className="w-12 h-px bg-gold mx-auto mb-6" />
                <p className="font-serif text-white text-2xl md:text-3xl font-semibold leading-tight mb-2">
                  FALSE<br />MODESTY<br />ASIDE
                </p>
                <div className="w-12 h-px bg-gold mx-auto mt-6 mb-6" />
                <p className="text-gold text-xs uppercase tracking-[0.3em]">David Fletcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
