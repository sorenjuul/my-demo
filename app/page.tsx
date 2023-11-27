'use client';
export const dynamic = 'force-dynamic';

import { Card, Grid, TabPanel, TabPanels } from '@tremor/react';
import EquipmentStateCard from '@/app/components/equipment-state-card';
import { Machine } from '@/app/data/types';
import { fetchJson } from '@/app/helpers/fecther';

async function fetchMachines(): Promise<Machine[]> {
  return await fetchJson('/api/machines', { next: { revalidate: 0 } });
}
export default async function DashboardExample() {
  const machines = await fetchMachines();
  return (
    <>
      <TabPanels>
        <TabPanel>
          <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
            {machines.map((item) => (
              <EquipmentStateCard item={item} key={item.id} />
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
