import { MenuIcon } from 'lucide-react';

import PrimaryButton from '../buttons/primary-button';
import NavbarLinks from '../navbar/navbar-links';
import Logo from './logo';

async function Navbar() {
  const user = true;

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b-DEFAULT border-neutral-900 bg-black/40 p-4 backdrop-blur-lg">
      <Logo />

      <NavbarLinks />

      <aside className="flex items-center gap-4">
        <PrimaryButton href="dashboard" />

        {/* TODO: Implement user authentication.  */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
}

export default Navbar;
