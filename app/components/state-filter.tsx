'use client';

import { Flex, Select, SelectItem } from '@tremor/react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { slugify } from '@/app/helpers/slugify';

export default function StateFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // refetch every 10 seconds
  useEffect(() => {
    const pollingInterval = setInterval(() => router.refresh(), 10000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, [router]);

  const createQueryString = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('filter', value);

    return params.toString();
  };

  const updateFilter = (value: string) => {
    router.push('?' + createQueryString(value));
  };

  const filter = searchParams.get('filter') || undefined;
  return (
    <Flex>
      <Select value={filter} onValueChange={updateFilter}>
        <SelectItem value={slugify('Operational')}>Operational</SelectItem>
        <SelectItem value={slugify('Transitioning')}>Transitioning</SelectItem>
        <SelectItem value={slugify('Idle')}>Idle</SelectItem>
      </Select>
    </Flex>
  );
}
