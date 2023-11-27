import {
  EquipmentType,
  Machine,
  Order,
  OrderQueue,
  OrderQueueItem,
  OrderRun,
  State,
  StateColor,
  StateText,
} from '@/app/data/types';
import { slugify } from '@/app/helpers/slugify';

let mockMachinesStorage: Machine[] = [];

export const mockStateText: StateText[] = ['Producing normally', 'Starting up/Winding down', 'Standing still'];
export const mockStateColor: StateColor[] = ['emerald', 'yellow', 'rose'];
export const mockEquipmentType: EquipmentType[] = ['Type 1', 'Type 2', 'Type 3'];

export const mockState = (): State[] => [
  ...Array.from({ length: 24 }, () => {
    const random = Math.floor(Math.random() * mockStateColor.length);
    return {
      color: mockStateColor[random],
      tooltip: mockStateText[random],
    };
  }),
];

export const mockOrder = (type: EquipmentType): Order => {
  return {
    id: Math.floor(Math.random() * 100000),
    type,
    quantity: Math.floor(Math.random() * 1000),
    model:
      'Mock Model ' +
      Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, '0'),
  };
};

export const mockMachine = (): Machine => {
  const currentMockState = mockState();
  return {
    id: Math.floor(Math.random() * 100000),
    title:
      'Mock Machine ' +
      Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, '0'),
    type: mockEquipmentType[Math.floor(Math.random() * mockEquipmentType.length)],
    uptime: `${Math.floor(Math.random() * 100)}%`,
    data: currentMockState,
    orderId: Math.floor(Math.random() * 100000),
    currentState: currentMockState[currentMockState.length - 1],
  };
};

export const mockOrderRun: OrderRun = {
  orderId: Math.floor(Math.random() * 100000),
  start: new Date(),
  end: new Date(),
};

export const getMockMachines = (): Machine[] => {
  if (mockMachinesStorage.length) {
    return mockMachinesStorage;
  }
  mockMachinesStorage = Array.from({ length: 12 }, () => mockMachine());
  mockMachinesStorage.sort((a, b) => (a.title > b.title ? 1 : -1));
  return mockMachinesStorage;
};

export const getMockOrderQueue = (type: EquipmentType): OrderQueue => {
  return Array.from({ length: 12 }, () => {
    return mockOrder(type);
  });
};
