import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote:
      'False Modesty Aside fundamentally changed how I approach leadership. Fletcher writes with rare clarity and an unflinching honesty that cuts through the noise of self-help platitudes.',
    name: 'Sarah Mitchell',
    title: 'CEO, Elevate Partners',
  },
  {
    quote:
      'This is the book I wish I had twenty years ago. David Fletcher articulates what so many of us feel but cannot name—the quiet sabotage of false humility and the liberation of owning your gifts.',
    name: 'James Whitmore',
    title: 'Author, The Intentional Executive',
  },
  {
    quote:
      'Elegant, profound, and deeply practical. Fletcher combines the rigor of a researcher with the soul of a storyteller. A masterclass in authentic confidence.',
    name: 'Dr. Elena Rodriguez',
    title: 'Harvard Business Review Contributor',
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans font-medium mb-4">
            Praise for the Book
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black">
            What Readers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} item={item} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  delay,
}: {
  item: (typeof testimonials)[number];
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>(delay);

  return (
    <div
      ref={ref}
      className="p-10 border border-gray-100 rounded-sm transition-all duration-500 hover:shadow-lg"
    >
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="font-serif text-lg text-rich-black leading-relaxed mb-8 italic">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div>
        <p className="font-sans text-sm font-semibold text-rich-black">{item.name}</p>
        <p className="font-sans text-xs text-secondary-gray mt-1">{item.title}</p>
      </div>
    </div>
  );
}
