import { OrderStatus } from './order-status';
import { CustomerModel } from './customer.model';
import { RequestFormModel } from './request-form.model';
import { CommentModel } from './comment.model';
import { WorkerModel } from './worker.model';
import { ServiceModel } from './service.model';

export class OrderFormModel {
  id?: number;
  requestForm?: RequestFormModel;
  timeCreated: Date;
  service: ServiceModel;
  customer: CustomerModel;
  worker?: WorkerModel;
  comment?: CommentModel;
  status: OrderStatus;
}
