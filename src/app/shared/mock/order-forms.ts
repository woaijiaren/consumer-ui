import { OrderFormModel } from '../models/order-form.model';
import { OrderStatus } from '../models/order-status';
import { customerById } from './customers';
import { serviceById } from './services';

export const orderForms: OrderFormModel[] = [
  {
    id: 1,
    timeCreated: new Date(),
    service: serviceById(1),
    customer: customerById(1),
    status: OrderStatus.Assigned,
  },
];
