import React from 'react';
import Image from 'next/image';

function Logo() {
  return (
    <aside className="flex items-center gap-[2px]">
      <p className="text-3xl font-bold">Fu</p>
      <Image
        src="/images/fuzzieLogo.png"
        alt="Fuzzie Logo"
        width={15}
        height={15}
        className="shadow-sn"
      />
      <p className="text-3xl font-bold">zie</p>
    </aside>
  );
}

export default Logo;
