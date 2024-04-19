import React from 'react';

import { Button } from '../ui/button';

type HeroButtonProps = {
  text: string;
  size: 'default' | 'lg' | 'sm' | 'icon';
};

function HeroButton({ text, size }: HeroButtonProps) {
  return (
    <Button
      size={size}
      className="group mb-8 flex w-full items-center justify-center gap-4 rounded-full border-t-2 border-[#4D4D4D] bg-[#1F1F1F] p-8 text-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-neutral-500 sm:w-fit md:mb-0"
    >
      <span className="bg-gradient-to-r from-neutral-500 to-neutral-600 bg-clip-text font-sans  text-transparent group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black md:text-center">
        {text}
      </span>
    </Button>
  );
}

export default HeroButton;
