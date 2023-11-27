export type StateText = 'Producing normally' | 'Starting up/Winding down' | 'Standing still';
export type StateColor = 'emerald' | 'yellow' | 'rose';
export type State = {
  color: StateColor;
  tooltip: StateText;
};
export type EquipmentType = 'Type 1' | 'Type 2' | 'Type 3';
export type Machine = {
  id: number;
  currentState: State;
  title: string;
  type: EquipmentType;
  uptime: string;
  data: State[];
  order?: Order;
  queue?: OrderQueue;
};
export type Order = {
  id: number;
  type: EquipmentType;
};
export type OrderRun = {
  order: Order;
  start: Date;
  end: Date;
};
export type OrderQueueItem = {
  order: Order;
  machine: Machine;
};
export type OrderQueue = OrderQueueItem[];
