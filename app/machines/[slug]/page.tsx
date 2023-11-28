export const dynamic = 'force-dynamic';

import { Machine } from '@/app/data/types';
import { fetchJson } from '@/app/helpers/fecther';
import {
  Bold,
  Card,
  Divider,
  Flex,
  ProgressBar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from '@tremor/react';
import StateSwitch from '@/app/components/state-switch';

async function fetchMachine(slug: string): Promise<Machine> {
  return await fetchJson(`/api/machines/${slug}`, { next: { revalidate: 0 } });
}

export default async function Page({ params }: { params: { slug: string } }) {
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
      <ProgressBar value={45} color="teal" className="mt-3" />
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
