import { NextResponse } from 'next/server';
import { getMockMachines } from '@/app/data/mocks';
import { Machine } from '@/app/data/types';

export async function GET(request: Request) {
  return NextResponse.json<Machine[]>(getMockMachines(), { status: 200 });
}
