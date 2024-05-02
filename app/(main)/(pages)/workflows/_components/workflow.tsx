'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

type WorkflowCardProps = {
  id: string;
  name: string;
  description: string;
  publish: boolean;
};

function WorkflowCard({ id, name, description, publish }: WorkflowCardProps) {
  return (
    <Card className="flex w-full items-center justify-between ">
      <CardHeader className="flex flex-col gap-4">
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-2">
            <Image
              src="/images/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/images/notion.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/images/discord.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>

      <div className="flex flex-col items-center gap-2 p-6">
        <Label className="text-muted-foreground" htmlFor="publish">
          Publish
        </Label>

        <Switch id="publish" onClick={() => {}} defaultChecked={publish} />
      </div>
    </Card>
  );
}

export default WorkflowCard;
