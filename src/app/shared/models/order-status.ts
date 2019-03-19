import { EnumMap } from '../utils/enum-map';

export enum OrderStatus {
  Created = 'Created',
  Assigned = 'Assigned',
  Delivered = 'Delivered',
  Completed = 'Completed',
  Canceled = 'Canceled',
  Rated = 'Rated',
}

export const orderStatusList = new EnumMap<OrderStatus>([
  {
    id: OrderStatus.Created,
    title: '已创建',
  },
  {
    id: OrderStatus.Assigned,
    title: '已指派',
  },
  {
    id: OrderStatus.Delivered,
    title: '已上门',
  },
  {
    id: OrderStatus.Completed,
    title: '已完成',
  },
  {
    id: OrderStatus.Canceled,
    title: '已取消',
  },
  {
    id: OrderStatus.Rated,
    title: '已打分',
  },
]);
