'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type ModalData = {};

type ModalContextType = {
  data: ModalData;
  isOpen: boolean;
  setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void;
  setClose: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: React.ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
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
    <ModalContext.Provider value={contextValue}>
      {children}
      {showModal}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a modalProvider');
  }
  return context;
};
