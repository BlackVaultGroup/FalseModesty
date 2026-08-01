import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutBook from '@/components/AboutBook';
import KeyTopics from '@/components/KeyTopics';
import Author from '@/components/Author';
import FeaturedQuote from '@/components/FeaturedQuote';
import Testimonials from '@/components/Testimonials';
import WhereToBuy from '@/components/WhereToBuy';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutBook />
      <KeyTopics />
      <Author />
      <FeaturedQuote />
      <Testimonials />
      <WhereToBuy />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
