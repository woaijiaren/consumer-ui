import { Component, OnInit } from '@angular/core';
import { OrderFormApi } from '../api/order-form-api.service';
import { OrderForm } from '../../shared/models/order-form';

@Component({
  selector: 'app-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  constructor(private api: OrderFormApi) {
  }

  cols = ['id'];
  items: OrderForm[];

  ngOnInit() {
    this.api.query().subscribe(items => this.items = items);
  }

}
