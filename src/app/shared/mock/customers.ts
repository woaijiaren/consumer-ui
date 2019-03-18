import { CustomerModel } from '../models/customer.model';

export const customers: CustomerModel[] = [
  {
    id: 1,
    name: '张三',
    phone: '13333333333',
  },
];

export function customerById(id: number): CustomerModel {
  return customers.find(it => it.id === id);
}
