import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

async function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b-DEFAULT border-neutral-900 bg-black/40 p-4 backdrop-blur-lg">
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

      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
        <ul className="flex list-none items-center gap-4">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/documentation">Documentation</Link>
          </li>
          <li>
            <Link href="/enterprise">Enterprise</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
