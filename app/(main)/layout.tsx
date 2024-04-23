import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Layout;
