import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { Book, Headphones, Search } from 'lucide-react';

import { Input } from '../ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

function InfoBar() {
  return (
    <div className="flex w-full flex-row items-center justify-end gap-6 p-4 dark:bg-black">
      <span className="flex items-center rounded-full bg-muted px-4">
        <Search className="cursor-pointer" />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guid</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <UserButton />
    </div>
  );
}

export default InfoBar;
