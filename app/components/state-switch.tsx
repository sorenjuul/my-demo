'use client';

import { Tab, TabGroup, TabList } from '@tremor/react';
import { ArrowRightCircleIcon, CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';
import { StateText } from '@/app/data/types';
import { useState } from 'react';

export default function StateSwitch({ tooltip }: { tooltip: StateText }) {
  const getMachineState = (state: string) => {
    switch (state) {
      case 'Operational':
        return 0;
      case 'Transitioning':
        return 1;
      case 'Idle':
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
    <div>
      <TabGroup index={index} onIndexChange={setIndex}>
        <TabList variant="solid" color={getMachineStateColor(index)}>
          <Tab className="text-inherit truncate" icon={CheckCircleIcon}>
            <p className="truncate">Operational</p>
          </Tab>
          <Tab className="text-inherit truncate" icon={ArrowRightCircleIcon}>
            Transitioning
          </Tab>
          <Tab className="text-inherit truncate" icon={MinusCircleIcon}>
            Idle
          </Tab>
        </TabList>
      </TabGroup>
    </div>
  );
}
