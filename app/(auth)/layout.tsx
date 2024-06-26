import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {children}
    </div>
  );
}
export default Layout;
