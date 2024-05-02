import React from 'react';

import WorkflowCard from './workflow';

function Workflows() {
  return (
    <div className="flex flex-col gap-4">
      <section className="m-2 flex flex-col">
        <WorkflowCard
          id="1f2e1fefe"
          name="Automation workflow"
          description="Creating a test workflow"
          publish={false}
        />
      </section>
    </div>
  );
}

export default Workflows;
