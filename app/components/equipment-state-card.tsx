import { MinusCircleIcon, CheckCircleIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

import { Card, Icon, Title, Text, Flex, Tracker, Divider, Badge } from '@tremor/react';
import { Machine } from '@/app/page';
import Link from 'next/link';

export default function EquipmentStateCard({ item }: { item: Machine }) {
  const cardLink = `/machines/${item.title.toLowerCase().replace(' ', '-')}`;
  return (
    <Link href={cardLink}>
      <Card>
        <Flex>
          <Title className="w-full">{item.title}</Title>
          <Text title="test">{item.type}</Text>
          <Flex justifyContent="end" className="-space-x-2 -mr-2">
            <Badge icon={MinusCircleIcon} color="rose">
              Standing still
            </Badge>
          </Flex>
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
