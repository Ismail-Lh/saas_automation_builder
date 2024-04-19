import React from 'react';

import HeroButton from './hero-button';
import HeroTitle from './hero-title';

function HeroTitleContainer() {
  return (
    <div className="flex flex-col items-center">
      <HeroButton size="lg" text="Start For Free Today" />
      <HeroTitle title="Automate Your Work With Fuzzie" />
    </div>
  );
}

export default HeroTitleContainer();
