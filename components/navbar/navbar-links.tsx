import React from 'react';
import Link from 'next/link';
import { navbarLinks } from '@/utils/constants';

function NavbarLinks() {
  return (
    <nav className="hidden md:block">
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
