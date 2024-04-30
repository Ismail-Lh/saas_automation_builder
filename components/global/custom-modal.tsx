import React from 'react';
import { useModal } from '@/context/modal-context';

import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '../ui/drawer';

type CustomModalProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function CustomModal({
  title,
  subTitle,
  children,
  defaultOpen,
}: CustomModalProps) {
  const { isOpen, setClose } = useModal();

  const handleClose = () => setClose();

  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">{title}</DrawerTitle>
          <DrawerDescription className="flex h-96 flex-col items-center gap-4 overflow-scroll text-center">
            {subTitle}
            {children}
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="flex flex-col gap-4 border-t-DEFAULT border-t-muted bg-background">
          <DrawerClose>
            <Button className="w-full" variant="ghost" onClick={handleClose}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CustomModal;
