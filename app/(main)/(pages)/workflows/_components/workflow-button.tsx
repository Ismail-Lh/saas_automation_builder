'use client';

import React from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

function WorkflowButton() {
  return (
    <Button size="icon">
      <Plus />
    </Button>
  );
}

export default WorkflowButton;
