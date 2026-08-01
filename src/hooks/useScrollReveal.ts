import { useRef, useEffect } from 'react';

export function useScrollReveal<T extends HTMLElement>(delay: number = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('reveal');

    const reveal = () => {
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    // If already in viewport (e.g. hero on page load), reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
