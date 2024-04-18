import HeroSection from '@/sections/hero-section';
import Navbar from '@/components/global/navbar';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />

      <HeroSection />
    </main>
  );
}
