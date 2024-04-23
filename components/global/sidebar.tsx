'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuOptions } from '@/utils/constants';
import clsx from 'clsx';
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

function Sidebar() {
  const pathName = usePathname();

  return (
    <nav className="flex h-screen flex-col items-center justify-between gap-10 overflow-scroll px-2 py-6 dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link className="flex flex-row font-bold" href="/">
          Fuzzie.
        </Link>

        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        'group flex size-8 scale-150 cursor-pointer items-center  justify-center rounded-lg p-[3px]',
                        {
                          'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>

                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>

        <Separator />

        <div className="flex h-56 flex-col items-center gap-9 overflow-scroll rounded-full border-DEFAULT px-2 py-4 dark:bg-[#353346]/30">
          <div className="relative rounded-full border-DEFAULT p-2 dark:border-t-2 dark:border-t-[#353346] dark:bg-[#353346]/70">
            <LucideMousePointerClick className="dark:text-white" size={18} />
            <div className="absolute bottom-[-30px] left-1/2 h-6 -translate-x-1/2 transform border-l-2 border-muted-foreground/50" />
          </div>

          <div className="relative rounded-full border-DEFAULT p-2 dark:border-t-2 dark:border-t-[#353346] dark:bg-[#353346]/70">
            <GitBranch className="text-muted-foreground" size={18} />
            <div className="absolute bottom-[-30px] left-1/2 h-6 -translate-x-1/2 transform border-l-2 border-muted-foreground/50" />
          </div>
          <div className="relative rounded-full border-DEFAULT p-2 dark:border-t-2 dark:border-t-[#353346] dark:bg-[#353346]/70">
            <Database className="text-muted-foreground" size={18} />
            <div className="absolute bottom-[-30px] left-1/2 h-6 -translate-x-1/2 transform border-l-2 border-muted-foreground/50" />
          </div>

          <div className="relative rounded-full border-DEFAULT p-2 dark:border-t-2 dark:border-t-[#353346] dark:bg-[#353346]/70">
            <GitBranch className="text-muted-foreground" size={18} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        {/* <ModeToggle /> */}
      </div>
    </nav>
  );
}

export default Sidebar;
