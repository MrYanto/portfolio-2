import Image from 'next/image';
import Navbar from './partials/Navbar';
import Hero from './partials/Hero';
import About from './partials/About';
import Footer from './partials/Footer';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Page */}
      <Hero />
      <About />
      {/* Footer */}
      <Footer />
    </>
  );
}
