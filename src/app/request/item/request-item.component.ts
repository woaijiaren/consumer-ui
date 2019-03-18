import { Component, Input, OnInit } from '@angular/core';
import { RequestFormModel } from '../../shared/models/request-form.model';
import { RequestStatus } from '../../shared/models/request-status';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss'],
})
export class RequestItemComponent implements OnInit {

  constructor() {
  }

  @Input()
  item: RequestFormModel;

  @Input()
  onlyActive = true;

  @Input()
  index: number;

  ngOnInit() {
  }

  get visible(): boolean {
    return !this.onlyActive || this.item.status !== RequestStatus.Canceled && this.item.status !== RequestStatus.Closed;
  }
}
