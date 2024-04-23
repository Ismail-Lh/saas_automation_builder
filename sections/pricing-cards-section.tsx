import React from 'react';
import { CheckIcon } from 'lucide-react';

import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';

function PricingCardsSection() {
  return (
    <section className="-mt-72 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
      <CardContainer className="inter-var ">
        <CardBody className="group/card relative h-auto  w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            Hobby
            <h2 className="text-6xl ">$0</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            Get a glimpse of what our software is capable of. Just a heads up
            you'll never leave us after this!
            <ul className="my-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon />3 Free automations
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                100 tasks per month
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Two-step Actions
              </li>
            </ul>
          </CardItem>
          <div className="mt-8 flex items-center justify-between">
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              Get Started Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var ">
        <CardBody className="group/card relative h-auto  w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-[#E2CBFF] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            Pro Plan
            <h2 className="text-6xl ">$29</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            Get a glimpse of what our software is capable of. Just a heads up
            you'll never leave us after this!
            <ul className="my-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon />3 Free automations
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                100 tasks per month
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Two-step Actions
              </li>
            </ul>
          </CardItem>
          <div className="mt-8 flex items-center justify-between">
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              Get Started Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var ">
        <CardBody className="group/card relative h-auto  w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            Unlimited
            <h2 className="text-6xl ">$99</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
          >
            Get a glimpse of what our software is capable of. Just a heads up
            you'll never leave us after this!
            <ul className="my-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon />3 Free automations
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                100 tasks per month
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Two-step Actions
              </li>
            </ul>
          </CardItem>
          <div className="mt-8 flex items-center justify-between">
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              Get Started Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
}

export default PricingCardsSection;
