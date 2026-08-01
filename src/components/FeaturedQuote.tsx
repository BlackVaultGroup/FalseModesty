import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FeaturedQuote() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <span className="font-serif text-6xl md:text-8xl text-gold leading-none select-none">
          &ldquo;
        </span>
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-rich-black leading-snug -mt-8 mb-8">
          Confidence is not arrogance.<br />
          It is the willingness to become<br />
          who you were meant to be.
        </blockquote>
        <span className="font-serif text-6xl md:text-8xl text-gold leading-none select-none">
          &rdquo;
        </span>
        <p className="text-secondary-gray text-sm uppercase tracking-widest mt-4">
          &mdash; David Fletcher
        </p>
      </div>
    </section>
  );
}
