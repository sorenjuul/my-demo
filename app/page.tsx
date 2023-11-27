'use client';

import { Card, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react';
import EquipmentStateCard from '@/app/components/equipment-state-card';

const website = [
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'rose', tooltip: 'Downtime' },
  // ...
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
];

const pos = [
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
  // ...
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
];

const webshop = [
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'gray', tooltip: 'Maintenance' },
  // ...
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
];

const categories = [
  {
    title: 'Website',
    metric: '98.3%',
    data: website,
  },
  {
    title: 'Point of Sales',
    metric: '97.1%',
    data: pos,
  },
  {
    title: 'Webshop',
    metric: '99.4%',
    data: webshop,
  },
];

export default function DashboardExample() {
  return (
    <main className="p-12">
      <Title>Equipment Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
              {categories.map((item) => (
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
      </TabGroup>
    </main>
  );
}
