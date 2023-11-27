'use client';

import { Card, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react';
import EquipmentStateCard from '@/app/components/equipment-state-card';

type StateText = 'Producing normally' | 'Starting up/Winding down' | 'Standing still';
type StateColor = 'emerald' | 'yellow' | 'rose';
type State = {
  color: StateColor;
  tooltip: StateText;
};
type EquipmentType = 'Type 1' | 'Type 2' | 'Type 3';
export type Machine = {
  title: string;
  type: EquipmentType;
  uptime: string;
  data: State[];
};

const machine1: State[] = [
  // generate a list of 24 states
  ...Array.from({ length: 24 }, () => ({
    color: 'emerald' as StateColor,
    tooltip: 'Producing normally' as StateText,
  })),
  {
    color: 'yellow',
    tooltip: 'Starting up/Winding down',
  },
];

const machine2: State[] = [
  // generate a list of 24 states
  ...Array.from({ length: 24 }, () => ({
    color: 'emerald' as StateColor,
    tooltip: 'Producing normally' as StateText,
  })),
  {
    color: 'rose',
    tooltip: 'Standing still',
  },
];

const machines: Machine[] = [
  {
    title: 'Machine 1',
    type: 'Type 1',
    uptime: '98.3%',
    data: machine1,
  },
  {
    title: 'Machine 2',
    type: 'Type 3',
    uptime: '95.3%',
    data: machine2,
  },
];

export default function DashboardExample() {
  return (
    <>
      <TabPanels>
        <TabPanel>
          <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
            {machines.map((item) => (
              <EquipmentStateCard item={item} key={item.title} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel>
          <div className="mt-6">
            <Card>
              <div className="h-96" />
            </Card>
          </div>
        </TabPanel>
      </TabPanels>
    </>
  );
}
