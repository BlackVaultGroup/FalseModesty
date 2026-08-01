import { useState } from 'react';
import { Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-padding">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <p className="text-gold text-xs uppercase tracking-[0.3em] font-sans font-medium mb-4">
          Join the Community
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mb-6">
          Stay Updated
        </h2>
        <p className="text-secondary-gray text-lg leading-relaxed mb-10">
          Receive news, speaking events, and future releases directly in your inbox.
        </p>

        {submitted ? (
          <p className="text-gold font-sans text-lg font-medium">
            Thank you for subscribing.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-4 border border-gray-200 rounded-sm font-sans text-sm text-rich-black placeholder:text-gray-400 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-primary gap-2 whitespace-nowrap"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
