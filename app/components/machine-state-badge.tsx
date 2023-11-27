'use client';
import { ArrowCircleRightIcon, CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { Badge } from '@tremor/react';
import { State } from '@/app/data/types';

export default function MachineStateBadge({ state }: { state: State }) {
  switch (state?.tooltip) {
    case 'Producing normally':
      return (
        <Badge icon={CheckCircleIcon} color="emerald">
          Producing normally
        </Badge>
      );
    case 'Starting up/Winding down':
      return (
        <Badge icon={ArrowCircleRightIcon} color="yellow">
          Starting up/Winding down
        </Badge>
      );
    case 'Standing still':
      return (
        <Badge icon={MinusCircleIcon} color="rose">
          Standing still
        </Badge>
      );
  }
}
