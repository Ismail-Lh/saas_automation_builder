import React from 'react';
import { CONNECTIONS } from '@/utils/constants';

import ConnectionCard from './_components/connection-card';

function ConnectionsPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>

      <div className="flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          <p>
            Connect all your apps directly from here. You may need to connect
            your apps to use them in your projects.
          </p>

          {CONNECTIONS.map((connection) => (
            <ConnectionCard key={connection.title} connection={connection} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default ConnectionsPage;
