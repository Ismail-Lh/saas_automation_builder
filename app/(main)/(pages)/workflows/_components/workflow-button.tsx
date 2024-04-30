'use client';

import React from 'react';
import { useModal } from '@/context/modal-context';
import { Plus } from 'lucide-react';

import WorkflowForm from '@/components/forms/workflow-form';
import CustomModal from '@/components/global/custom-modal';
import { Button } from '@/components/ui/button';

function WorkflowButton() {
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subTitle="Workflow automation helps you automate your business processes."
      >
        <WorkflowForm />
      </CustomModal>
    );
  };
  return (
    <Button size="icon" onClick={handleClick}>
      <Plus />
    </Button>
  );
}

export default WorkflowButton;
