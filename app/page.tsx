import { useState } from 'react';

export const dynamic = 'force-dynamic';

import { Flex, Grid, Select, SelectItem } from '@tremor/react';
import EquipmentStateCard from '@/app/components/equipment-state-card';
import { Machine, StateText } from '@/app/data/types';
import { fetchJson } from '@/app/helpers/fecther';
import StateFilter from '@/app/components/state-filter';

async function fetchMachines(filter: string | undefined): Promise<Machine[]> {
  return await fetchJson(`/api/machines${filter ? '?filter=' + filter : ''}`, { next: { revalidate: 0 } });
}
export default async function DashboardExample({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const filter = searchParams?.filter;
  const machines = await fetchMachines(filter);
  return (
    <>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <StateFilter />
      </Grid>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        {machines.map((item) => (
          <EquipmentStateCard item={item} key={item.id} />
        ))}
      </Grid>
    </>
  );
}
