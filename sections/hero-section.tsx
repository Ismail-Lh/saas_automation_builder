import React from 'react';

import { ContainerScroll } from '@/components/global/container-scroll-animation';
import HeroTitleContainer from '@/components/hero/hero-title-container';

function HeroSection() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center !overflow-visible rounded-md bg-neutral-950  antialiased">
      <div className="absolute inset-0  size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]" />
      <div className="mt-[-100px] flex flex-col md:mt-[-50px]">
        <ContainerScroll titleComponent={HeroTitleContainer} />
      </div>
    </section>
  );
}

export default HeroSection;
