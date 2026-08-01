import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Author() {
  const imageRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>(200);

  return (
    <section id="author" className="section-padding bg-alt-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div ref={imageRef} className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-72 md:w-80 lg:w-96 aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-sm">
              <p className="text-secondary-gray text-sm uppercase tracking-widest">
                Author Portrait Placeholder
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 md:w-80 lg:w-96 aspect-[3/4] border border-gold/30 rounded-sm -z-10" />
          </div>
        </div>

        <div ref={textRef}>
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans font-medium mb-4">
            Meet the Author
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mb-2">
            David Fletcher
          </h2>
          <p className="text-secondary-gray text-sm uppercase tracking-widest mb-8">
            Author &bull; Speaker &bull; Leader
          </p>
          <p className="text-secondary-gray text-lg leading-relaxed mb-6">
            David Fletcher is an acclaimed author, keynote speaker, and thought leader whose work sits at the intersection of personal development, leadership, and authentic influence. With over two decades of experience guiding executives, entrepreneurs, and emerging leaders, David has become a trusted voice for those seeking to lead with both conviction and compassion.
          </p>
          <p className="text-secondary-gray text-lg leading-relaxed mb-6">
            His writing has been featured in leading publications, and his speaking engagements span Fortune 500 companies, international conferences, and university lecture halls. David holds degrees from Columbia University and the London School of Economics, and currently resides in New York City.
          </p>
          <p className="text-secondary-gray text-lg leading-relaxed">
            False Modesty Aside is his third book and represents the culmination of years of research into what separates those who lead with impact from those who remain on the sidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
