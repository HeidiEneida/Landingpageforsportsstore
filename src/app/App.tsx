import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Features } from './components/Features';
import { ContentProposals } from './components/ContentProposals';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
        <ContentProposals />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}