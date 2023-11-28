import type { Metadata } from 'next';
import './globals.css';
import { Subtitle, Title } from '@tremor/react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Demo App',
  description: 'A demo of a utility management application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="p-4 sm:p-12">
          <Link href="/">
            <Title>Equipment Dashboard</Title>
            <Subtitle>My Demo App</Subtitle>
          </Link>
          {children}
        </main>
      </body>
    </html>
  );
}
