'use client';
import { ArrowCircleRightIcon, CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { Badge } from '@tremor/react';
import { State } from '@/app/data/types';

export default function MachineStateBadge({ state }: { state: State }) {
  switch (state?.tooltip) {
    case 'Operational':
      return (
        <Badge icon={CheckCircleIcon} color="emerald">
          Operational
        </Badge>
      );
    case 'Transitioning':
      return (
        <Badge icon={ArrowCircleRightIcon} color="yellow">
          Transitioning
        </Badge>
      );
    case 'Idle':
      return (
        <Badge icon={MinusCircleIcon} color="rose">
          Idle
        </Badge>
      );
  }
}
