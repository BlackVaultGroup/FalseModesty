import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutBook() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>(200);

  return (
    <section id="about" className="section-padding bg-alt-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div ref={leftRef}>
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans font-medium mb-4">
            Discover the Book
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mb-8">
            About the Book
          </h2>
          <p className="text-secondary-gray text-lg leading-relaxed mb-6">
            False Modesty Aside is a transformative exploration of what it means to live with authentic confidence in a culture that often confuses humility with hiding. Through compelling research, personal narratives, and actionable frameworks, David Fletcher dismantles the myths that keep people playing small.
          </p>
          <p className="text-secondary-gray text-lg leading-relaxed mb-6">
            This book addresses the tension between ambition and authenticity, showing readers how to lead boldly without sacrificing integrity. Each chapter builds a case for why the world needs people who are willing to own their strengths, voice their vision, and step into leadership with clarity and purpose.
          </p>
          <p className="text-secondary-gray text-lg leading-relaxed">
            Whether you are a seasoned executive or an emerging voice in your field, this book will reshape how you think about confidence, influence, and the courage it takes to be fully yourself.
          </p>
        </div>

        <div ref={rightRef} className="flex justify-center">
          <div className="w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/8085253/pexels-photo-8085253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Warm reading space with open book and lamp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
