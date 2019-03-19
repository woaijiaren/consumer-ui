import { Component, OnInit } from '@angular/core';
import { OrderFormApi } from '../api/order-form-api.service';
import { OrderFormModel } from '../../shared/models/order-form.model';

@Component({
  selector: 'app-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  constructor(private api: OrderFormApi) {
  }

  items: OrderFormModel[];

  ngOnInit() {
    this.api.query().subscribe(items => this.items = items);
  }

}
