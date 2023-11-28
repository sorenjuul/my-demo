'use client';

import { Tab, TabGroup, TabList } from '@tremor/react';
import { ArrowCircleRightIcon, CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { StateText } from '@/app/data/types';
import { useState } from 'react';

export default function StateSwitch({ tooltip }: { tooltip: StateText }) {
  const getMachineState = (state: string) => {
    switch (state) {
      case 'Producing normally':
        return 0;
      case 'Starting up/Winding down':
        return 1;
      case 'Standing still':
        return 2;
    }
  };
  const [index, setIndex] = useState(getMachineState(tooltip));

  const getMachineStateColor = (state: number | undefined) => {
    switch (state) {
      case 0:
        return 'emerald';
      case 1:
        return 'yellow';
      case 2:
        return 'rose';
    }
  };

  return (
    <>
      <TabGroup index={index} onIndexChange={setIndex}>
        <TabList variant="solid" color={getMachineStateColor(index)}>
          <Tab icon={CheckCircleIcon}>Producing normally</Tab>
          <Tab icon={ArrowCircleRightIcon}>Starting up/Winding down</Tab>
          <Tab icon={MinusCircleIcon}>Standing still</Tab>
        </TabList>
      </TabGroup>
    </>
  );
}
