import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import BuildYourBlend from '@/components/BuildYourBlend';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import LocationHours from '@/components/LocationHours';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <BuildYourBlend />
        <Features />
        <Gallery />
        <Testimonials />
        <LocationHours />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
