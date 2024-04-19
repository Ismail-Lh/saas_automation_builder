import React from 'react';

type HeroTitleProps = {
  title: string;
};

function HeroTitle({ title }: HeroTitleProps) {
  return (
    <h1 className="bg-gradient-to-b from-white  to-neutral-600 bg-clip-text font-sans text-5xl font-bold text-transparent md:text-8xl">
      {title}
    </h1>
  );
}

export default HeroTitle;
