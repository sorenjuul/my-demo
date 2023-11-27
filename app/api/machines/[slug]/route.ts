import { NextResponse } from 'next/server';
import { getMockOrderQueue, mockMachine } from '@/app/data/mocks';
import { Machine } from '@/app/data/types';

export async function GET(request: Request) {
  const machine = mockMachine();
  machine.queue = getMockOrderQueue(machine.type);
  return NextResponse.json<Machine>(machine, { status: 200 });
}
