import { Customer } from '../models/customer';

export const customers: Customer[] = [
  {
    id: 1,
    name: '张三',
    phone: '13333333333',
  },
];

export function customerById(id: number): Customer {
  return customers.find(it => it.id === id);
}
