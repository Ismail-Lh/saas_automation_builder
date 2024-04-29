import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Connection } from '@/utils/types';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ConnectionCardProps = {
  connection: Connection;
  connected: {};
};

function ConnectionCard({ connection, connected }: ConnectionCardProps) {
  let linkHref;

  switch (connection.title) {
    case 'Google Drive':
      linkHref = process.env.NEXT_PUBLIC_GOOGLE_SCOPES!;
      break;
    case 'Notion':
      linkHref = process.env.NEXT_PUBLIC_NOTION_AUTH_URL!;
      break;
    case 'Slack':
      linkHref = process.env.NEXT_PUBLIC_SLACK_REDIRECT!;
      break;
    case 'Discord':
      linkHref = process.env.NEXT_PUBLIC_DISCORD_REDIRECT!;
      break;
    default:
      linkHref = '#';
  }
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Image
            src={connection.imageSrc}
            alt={connection.title}
            height={30}
            width={30}
            className="object-contain"
          />
        </div>

        <div>
          <CardTitle className="text-lg"> {connection.title}</CardTitle>
          <CardDescription>{connection.description}</CardDescription>
        </div>
      </CardHeader>

      <div className="flex flex-col items-center gap-2 p-4">
        <Link
          href={linkHref}
          className="rounded-lg bg-primary p-2 font-bold text-primary-foreground"
        >
          Connect
        </Link>
      </div>
    </Card>
  );
}

export default ConnectionCard;
