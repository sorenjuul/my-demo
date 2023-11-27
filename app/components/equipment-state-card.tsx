'use client';
import { MinusCircleIcon, CheckCircleIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

import { Card, Icon, Title, Text, Flex, Tracker, Divider, Badge } from '@tremor/react';
import Link from 'next/link';
import { Machine } from '@/app/data/types';
import MachineStateBadge from '@/app/components/machine-state-badge';
import { slugify } from '@/app/helpers/slugify';

export default function EquipmentStateCard({ item }: { item: Machine }) {
  const cardLink = `/machines/${slugify(item.title)}`;
  return (
    <Link href={cardLink}>
      <Card>
        <Flex>
          <Title className="w-full">{item.title}</Title>
          <Flex justifyContent="end" className="-space-x-2 -mr-2">
            <MachineStateBadge state={item.currentState} />
          </Flex>
        </Flex>
        <Flex>
          <Text title="test">{item.type}</Text>
        </Flex>
        <Divider />
        <Flex justifyContent="end" className="-space-x-2 -mr-2">
          <Icon icon={CheckCircleIcon} color="emerald" tooltip="Producing normally" />
          <Icon icon={ArrowCircleRightIcon} color="yellow" tooltip="Starting up/Winding down" />
          <Icon icon={MinusCircleIcon} color="rose" tooltip="Standing still" />
        </Flex>
        <Flex className="mt-4">
          <Text>Uptime</Text>
          <Text>{item.uptime}</Text>
        </Flex>
        <Tracker data={item.data} className="mt-2" />
        <Flex className="mt-2">
          <Text>00:00</Text>
          <Text>23:59</Text>
        </Flex>
      </Card>
    </Link>
  );
}
