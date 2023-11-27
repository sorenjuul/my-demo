import MachineStateBadge from '@/app/components/machine-state-badge';

export const dynamic = 'force-dynamic';

import { Machine } from '@/app/data/types';
import { fetchJson } from '@/app/helpers/fecther';
import { Card, Divider, Flex, List, Text, Title } from '@tremor/react';

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
      <div>
        <Title className="mt-8">Queued Orders</Title>
        <List className="mt-2">
          {/*{roles.map((item) => (
            <ListItem key={item.name}>
              <Text>{item.name}</Text>
              <Text>
                <Bold>{item.data[selectedCategory].amount}</Bold> {`(${item.data[selectedCategory].share})`}
              </Text>
            </ListItem>
          ))}*/}
        </List>
      </div>
    </Card>
  );
}
