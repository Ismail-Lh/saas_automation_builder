import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-scroll rounded-l-3xl border-l-DEFAULT border-t-DEFAULT border-muted-foreground/20 pb-20">
      {children}
    </div>
  );
}

export default Layout;
