import { ArrowCircleDownIcon, CogIcon, MinusCircleIcon, CheckCircleIcon } from '@heroicons/react/solid';

import { Card, Icon, Title, Text, Flex, Tracker } from '@tremor/react';

export default function EquipmentStateCard({ item }: { item: any }) {
  return (
    <Card>
      <Flex>
        <Title className="w-full">{item.title}</Title>
        <Flex justifyContent="end" className="-space-x-2 -mr-2">
          <Icon icon={CheckCircleIcon} color="emerald" tooltip="Operational" />
          <Icon icon={ArrowCircleDownIcon} color="yellow" tooltip="Degraded" />
          <Icon icon={CogIcon} color="gray" tooltip="Maintenance" />
          <Icon icon={MinusCircleIcon} color="rose" tooltip="Downtime" />
        </Flex>
      </Flex>
      <Flex className="mt-4">
        <Text>Uptime</Text>
        <Text>{item.metric}</Text>
      </Flex>
      <Tracker data={item.data} className="mt-2" />
      <Flex className="mt-2">
        <Text>Jul 14</Text>
        <Text>Aug 23</Text>
      </Flex>
    </Card>
  );
}
