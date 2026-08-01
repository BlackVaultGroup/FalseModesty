import { Compass, Users, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const topics = [
  {
    icon: Compass,
    title: 'Finding Authentic Confidence',
    description:
      'Learn to distinguish between performative bravado and genuine self-assurance. Discover frameworks for building unshakeable confidence rooted in self-knowledge.',
  },
  {
    icon: Users,
    title: 'Leadership Without Ego',
    description:
      'Explore how the most effective leaders balance conviction with empathy, creating environments where others thrive without diminishing their own voice.',
  },
  {
    icon: Sparkles,
    title: 'Living Beyond Self-Doubt',
    description:
      'Break free from the patterns of self-minimization that hold you back. Embrace practical strategies for silencing the inner critic and stepping into your full potential.',
  },
];

export default function KeyTopics() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans font-medium mb-4">
            What You Will Discover
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black">
            Key Themes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {topics.map((topic, index) => (
            <TopicCard key={topic.title} topic={topic} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TopicCard({
  topic,
  delay,
}: {
  topic: (typeof topics)[number];
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>(delay);
  const Icon = topic.icon;

  return (
    <div
      ref={ref}
      className="group p-10 border border-gray-100 rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/30"
    >
      <Icon className="w-8 h-8 text-gold mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
      <h3 className="font-serif text-xl font-semibold text-rich-black mb-4">
        {topic.title}
      </h3>
      <p className="text-secondary-gray text-base leading-relaxed">
        {topic.description}
      </p>
    </div>
  );
}
