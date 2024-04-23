'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

type MouseEnterContextType = {
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
};

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(
  undefined
);

export function MouseEnterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const value: MouseEnterContextType = useMemo(
    () => ({ isMouseEntered, setIsMouseEntered }),
    [isMouseEntered, setIsMouseEntered]
  );

  return (
    <MouseEnterContext.Provider value={value}>
      {children}
    </MouseEnterContext.Provider>
  );
}

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);

  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
};
