import React from 'react';
import clsx from 'clsx';

function Logs({ selected }: { selected: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="19"
        rx="3"
        className={clsx(
          'fill-[#BABABB] transition-all group-hover:fill-[#7540A9] dark:fill-[#353346] dark:group-hover:fill-[#C8C7FF]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
      <path
        d="M14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3H8V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3H14Z"
        className={clsx(
          'fill-[#5B5966] transition-all group-hover:fill-[#BD8AFF] dark:fill-[#C0BFC4] dark:group-hover:fill-[#9F54FF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 11C7 10.4477 7.44772 10 8 10L16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12L8 12C7.44772 12 7 11.5523 7 11Z"
        className={clsx(
          'fill-[#5B5966] transition-all group-hover:fill-[#BD8AFF] dark:fill-[#C0BFC4] dark:group-hover:fill-[#9F54FF] ',
          { 'dark:!fill-[#7540A9] fill-[#BD8AFF] ': selected }
        )}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15C7 14.4477 7.44772 14 8 14L12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16L8 16C7.44772 16 7 15.5523 7 15Z"
        className={clsx(
          'fill-[#BABABB] transition-all group-hover:fill-[#7540A9] dark:fill-[#353346] dark:group-hover:fill-[#C8C7FF]',
          { 'dark:!fill-[#C8C7FF] fill-[#7540A9] ': selected }
        )}
      />
    </svg>
  );
}

export default Logs;
