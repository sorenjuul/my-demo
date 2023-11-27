import MachineStateBadge from '@/app/components/machine-state-badge';

export const dynamic = 'force-dynamic';

import { Machine } from '@/app/data/types';
import { fetchJson } from '@/app/helpers/fecther';
import {
  Card,
  Divider,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from '@tremor/react';

async function fetchMachine(slug: string): Promise<Machine> {
  return await fetchJson(`/api/machines/${slug}`, { next: { revalidate: 0 } });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const machine = await fetchMachine(params.slug);
  return (
    <Card className="mt-6">
      <Flex>
        <Title className="w-full">{machine.title}</Title>
        <Flex justifyContent="end" className="-space-x-2 -mr-2">
          <MachineStateBadge state={machine.currentState} />
        </Flex>
      </Flex>
      <Flex>
        <Text title="test">{machine.type}</Text>
      </Flex>
      <Divider />
      <Title className="mt-8">Queued Orders</Title>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Queue number</TableHeaderCell>
            <TableHeaderCell>Order Id</TableHeaderCell>
            <TableHeaderCell>Model</TableHeaderCell>
            <TableHeaderCell>Quantity</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {machine.queue?.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.model}</TableCell>
              <TableCell>{order.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
