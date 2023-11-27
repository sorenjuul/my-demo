import { NextResponse } from 'next/server';
import { getMockMachine, mockMachine } from '@/app/data/mocks';
import { Machine } from '@/app/data/types';
import { notFound } from 'next/navigation';

export async function GET(request: Request, context: any) {
  return NextResponse.json<Machine>(mockMachine(), { status: 200 });
}
