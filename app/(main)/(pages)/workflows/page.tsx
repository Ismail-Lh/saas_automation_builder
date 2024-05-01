import React from 'react';

import Workflows from './_components';
import WorkflowButton from './_components/workflow-button';

function WorkflowsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <h1>Workflows</h1>
        <WorkflowButton />
      </div>

      <Workflows />
    </div>
  );
}

export default WorkflowsPage;
