import { OrderForm } from '../models/order-form';
import { OrderStatus } from '../models/order-status';
import { BusinessType } from '../models/business-types';
import { customerById } from './customers';

export const orderForms: OrderForm[] = [
  {
    id: 1,
    timeCreated: new Date(),
    businessType: BusinessType.YueSao,
    customer: customerById(1),
    status: OrderStatus.Created,
  },
];
