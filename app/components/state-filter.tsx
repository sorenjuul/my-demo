'use client';

import { Flex, Select, SelectItem } from '@tremor/react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { slugify } from '@/app/helpers/slugify';

export default function StateFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // refecth every 10 seconds
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
        <SelectItem value={slugify('Producing normally')}>Producing normally</SelectItem>
        <SelectItem value={slugify('Starting up/Winding down')}>Starting up/Winding down</SelectItem>
        <SelectItem value={slugify('Standing still')}>Standing still</SelectItem>
      </Select>
    </Flex>
  );
}
