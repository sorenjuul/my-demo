'use client';

import { Machine } from '@/app/data/types';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';

export function MachineTable(props: { machine: Machine }) {
  return (
    <Table className="mt-6">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Queue number</TableHeaderCell>
          <TableHeaderCell>Order Id</TableHeaderCell>
          <TableHeaderCell>Model</TableHeaderCell>
          <TableHeaderCell>Quantity</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.machine.queue?.map((order, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.model}</TableCell>
            <TableCell>{order.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
