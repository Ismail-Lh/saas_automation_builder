import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { User, Workflows } from '@prisma/client';

import prisma from '@/lib/prisma-db';

async function Page() {
  const authUser = await currentUser();

  if (!authUser) return null;

  const user = (await prisma.user.findUnique({
    where: { clerkId: authUser.id },
  })) as User;

  const workflows = (await prisma.workflows.findMany({
    where: { userId: user.clerkId },
  })) as Workflows[];

  return (
    <div className="flex h-full items-center justify-center">
      {workflows.length === 0 ? (
        <h1>No workflows found</h1>
      ) : (
        workflows.map((workflow: Workflows) => (
          <div key={workflow.id}>
            <h1>{workflow.name}</h1>
            <p>{workflow.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Page;
