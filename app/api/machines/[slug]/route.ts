import { NextResponse } from 'next/server';
import { getMockMachine } from '@/app/data/mocks';
import { Machine } from '@/app/data/types';
import { notFound } from 'next/navigation';

export async function GET(request: Request, context: any) {
  const slug = context.params.slug;
  const machine = getMockMachine(slug);
  if (!machine) {
    return notFound();
  }
  return NextResponse.json<Machine>(machine, { status: 200 });
}
