import React from 'react';

import { LampComponent } from '@/components/global/lamp';

function LampSection() {
  return (
    <section className="mt-[-500px]">
      <LampComponent />

      <div className="-mt-72 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
        hello
      </div>
    </section>
  );
}

export default LampSection;
