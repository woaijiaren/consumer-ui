import { OrderStatus } from './order-status';
import { BusinessType } from './business-types';
import { CustomerModel } from './customer.model';
import { RequestFormModel } from './request-form.model';
import { CommentModel } from './comment.model';
import { WorkerModel } from './worker.model';

export class OrderFormModel {
  id?: number;
  requestForm?: RequestFormModel;
  timeCreated: Date;
  businessType: BusinessType;
  customer: CustomerModel;
  worker?: WorkerModel;
  comment?: CommentModel;
  status: OrderStatus;
}
