'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type ModalData = {};

type ModelContextType = {
  data: ModalData;
  isOpen: boolean;
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void;
  setClose: () => void;
};

const ModelContext = createContext<ModelContextType | undefined>(undefined);

type ModelProviderProps = {
  children: React.ReactNode;
};

export function ModelProvider({ children }: ModelProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModalData>({});
  const [showModal, setShowModal] = useState<React.ReactNode | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contextValue = useMemo(() => {
    const setOpen = async (
      modal: React.ReactNode,
      fetchData?: () => Promise<any>
    ) => {
      if (modal) {
        if (fetchData) {
          setData({ ...data, ...[await fetchData()] } || {});
        }
        setShowModal(modal);
        setIsOpen(true);
      }
    };

    const setClose = () => {
      setIsOpen(false);
      setData({});
    };

    return { data, setOpen, setClose, isOpen };
  }, [data, isOpen]);

  if (!isMounted) return null;

  return (
    <ModelContext.Provider value={contextValue}>
      {children}
      {showModal}
    </ModelContext.Provider>
  );
}

export const useModel = () => {
  const context = useContext(ModelContext);

  if (context === undefined) {
    throw new Error('useModel must be used within a modelProvider');
  }
  return context;
};
