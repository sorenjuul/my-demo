import { NextResponse } from 'next/server';
import { getMockMachines } from '@/app/data/mocks';
import { Machine } from '@/app/data/types';
import { slugify } from '@/app/helpers/slugify';

export async function GET(request: Request) {
  const filter = request.url.split('?filter=')[1];
  if (filter) {
    const machines = getMockMachines().filter((machine) => slugify(machine.currentState.tooltip) === filter);
    return NextResponse.json<Machine[]>(machines, { status: 200 });
  }
  return NextResponse.json<Machine[]>(getMockMachines(), { status: 200 });
}
