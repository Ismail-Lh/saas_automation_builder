import { clients } from '@/utils/constants';

import HeroParallaxSection from '@/sections/hero-parallax-section';
import HeroSection from '@/sections/hero-section';
import InfiniteMovingCards from '@/components/global/infinite-moving-cards';
import Navbar from '@/components/global/navbar';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />

      <HeroSection />

      <InfiniteMovingCards
        className="mt-[-100px] md:mt-40"
        items={clients}
        direction="right"
        speed="slow"
      />

      <HeroParallaxSection />
    </main>
  );
}
