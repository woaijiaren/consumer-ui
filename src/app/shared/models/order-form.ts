import { OrderStatus } from './order-status';
import { BusinessType } from './business-types';
import { Customer } from './customer';
import { RequestForm } from './request-form';
import { Comment } from './comment';
import { Worker } from './worker';

export class OrderForm {
  id?: number;
  requestForm?: RequestForm;
  timeCreated: Date;
  businessType: BusinessType;
  customer: Customer;
  worker?: Worker;
  comment?: Comment;
  status: OrderStatus;
}
