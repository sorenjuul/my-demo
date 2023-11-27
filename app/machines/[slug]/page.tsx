import { Machine } from '@/app/data/types';
import { fetchJson } from '@/app/helpers/fecther';
import { Card } from '@tremor/react';

async function fetchMachine(slug: string): Promise<Machine> {
  return await fetchJson(`/api/machines/${slug}`, { next: { revalidate: 1 } });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const machine = await fetchMachine(params.slug);
  return (
    <Card className="mt-6">
      <div className="h-96" />
    </Card>
  );
}
