export type StateText = 'Operational' | 'Transitioning' | 'Idle';
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
  orderId?: number;
  queue?: OrderQueue;
};
export type Order = {
  id: number;
  type: EquipmentType;
  quantity: number;
  model: string;
};
export type OrderRun = {
  orderId: number;
  start: Date;
  end: Date;
};
export type OrderQueue = Order[];
