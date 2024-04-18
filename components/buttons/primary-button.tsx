import React from 'react';
import Link from 'next/link';

type PrimaryButtonProps = {
  href: string;
};

function PrimaryButton({ href }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex size-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {/* TODO: Implement user authentication.  */}
        {true ? 'Dashboard' : 'Get Started'}
      </span>
    </Link>
  );
}

export default PrimaryButton;
