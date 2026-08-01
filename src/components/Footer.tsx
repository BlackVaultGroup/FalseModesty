import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 bg-rich-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              False Modesty Aside
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A bold exploration of confidence, humility, and the courage to embrace your true potential.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              David Fletcher
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  About the Book
                </a>
              </li>
              <li>
                <a href="#author" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Author
                </a>
              </li>
              <li>
                <a href="#buy" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Purchase
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} David Fletcher. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
