import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Tab, TabGroup, TabList, Text, Title } from '@tremor/react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Demo App',
  description: 'A demo of a utility management application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-12">
          <Title>Equipment Dashboard</Title>
          <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
          {children}
        </main>
      </body>
    </html>
  );
}
