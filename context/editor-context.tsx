'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type EditorContextType = {};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

type EditorProviderProps = {
  children: React.ReactNode;
};

export function EditorProvider({ children }: EditorProviderProps) {
  return (
    <EditorContext.Provider value="hello">{children}</EditorContext.Provider>
  );
}

export const useEditor = () => {
  const context = useContext(EditorContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a editorProvider');
  }
  return context;
};
