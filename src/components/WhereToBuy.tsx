import { ShoppingBag, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhereToBuy() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="buy" className="section-padding bg-alt-bg">
      <div className="max-w-3xl mx-auto text-center">
        <div ref={ref}>
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans font-medium mb-4">
            Get Your Copy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mb-8">
            Available on Amazon
          </h2>
          <p className="text-secondary-gray text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Order your copy of <em>False Modesty Aside</em> today and start your journey toward authentic confidence.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-4 px-12 py-5 bg-rich-black text-white font-sans font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gold group"
          >
            <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            Order on Amazon
            <ExternalLink className="w-4 h-4 opacity-60" strokeWidth={1.5} />
          </a>

          <div className="mt-8 flex items-center justify-center gap-8 text-xs text-secondary-gray uppercase tracking-widest">
            <span>Hardcover</span>
            <span className="w-1 h-1 rounded-full bg-gold/40 inline-block" />
            <span>Paperback</span>
            <span className="w-1 h-1 rounded-full bg-gold/40 inline-block" />
            <span>Kindle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
