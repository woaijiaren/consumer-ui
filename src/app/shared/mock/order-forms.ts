import { OrderFormModel } from '../models/order-form.model';
import { OrderStatus } from '../models/order-status';
import { BusinessType } from '../models/business-types';
import { customerById } from './customers';

export const orderForms: OrderFormModel[] = [
  {
    id: 1,
    timeCreated: new Date(),
    businessType: BusinessType.YueSao,
    customer: customerById(1),
    status: OrderStatus.Created,
  },
];
