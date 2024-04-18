import React from 'react';
import Link from 'next/link';
import { navbarLinks } from '@/utils/constants';

function NavbarLinks() {
  return (
    <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
      <ul className="flex list-none items-center gap-4">
        {navbarLinks.map(({ href, text }) => (
          <li id={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarLinks;
