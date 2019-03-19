import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus, orderStatusList } from '../models/order-status';

@Pipe({
  name: 'orderStatus',
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: OrderStatus): string {
    return orderStatusList.lookup(value);
  }

}
