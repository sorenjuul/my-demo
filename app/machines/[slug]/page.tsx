export const dynamic = 'force-dynamic';

import { Machine } from '@/app/data/types';
import { fetchJson } from '@/app/helpers/fecther';
import { Bold, Card, Divider, Flex, Text, Title } from '@tremor/react';
import StateSwitch from '@/app/components/state-switch';
import { MachineTable } from '@/app/components/machine-table';

async function fetchMachine(slug: string): Promise<Machine> {
  return await fetchJson(`/api/machines/${slug}`, { next: { revalidate: 0 } });
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const machine = await fetchMachine(params.slug);

  return (
    <Card className="mt-6 p-2 sm:p-6">
      <Flex>
        <Title className="truncate">{machine.title}</Title>
      </Flex>
      <Flex>
        <Text>{machine.type}</Text>
      </Flex>
      <Flex justifyContent="end" alignItems="end">
        <StateSwitch tooltip={machine.currentState.tooltip} />
      </Flex>

      <Divider />
      <Flex className="mt-4">
        <Text>
          Current Order Id: <Bold>{machine.orderId}</Bold>
        </Text>
        <Text>45%</Text>
      </Flex>
      <Divider />
      <Title className="mt-8">Queued Orders</Title>
      <MachineTable machine={machine} />
    </Card>
  );
}
