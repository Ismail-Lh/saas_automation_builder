import React from 'react';

import InfoBar from '@/components/global/infobar';
import Sidebar from '@/components/global/sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
