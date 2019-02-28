import { Component, Input, OnInit } from '@angular/core';
import { RequestForm } from '../models/request-form';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss'],
})
export class RequestItemComponent implements OnInit {

  constructor() {
  }

  @Input()
  item: RequestForm;

  ngOnInit() {
  }

}
