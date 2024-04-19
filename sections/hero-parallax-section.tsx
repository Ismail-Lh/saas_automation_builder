import React from 'react';
import { products } from '@/utils/constants';

import HeroParallax from '@/components/global/hero-parallax';

function HeroParallaxSection() {
  return (
    <section>
      <HeroParallax products={products} />
    </section>
  );
}

export default HeroParallaxSection;
