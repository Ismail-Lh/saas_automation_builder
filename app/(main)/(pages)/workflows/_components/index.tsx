import React from 'react';

import WorkflowCard from './workflow';

function Workflows() {
  return (
    <div className="fle flex-col gap-4">
      <section className="flex flex-col gap-4 p-6">
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
