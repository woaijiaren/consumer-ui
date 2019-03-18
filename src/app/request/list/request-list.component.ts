import { Component, OnInit } from '@angular/core';
import { RequestFormApi } from '../api/request-form-api.service';
import { RequestFormModel } from '../../shared/models/request-form.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss'],
})
export class RequestListComponent implements OnInit {

  constructor(private api: RequestFormApi) {
  }

  items: RequestFormModel[];

  onlyActive = new FormControl(true);

  ngOnInit() {
    this.api.query().subscribe(items => this.items = items);
  }

}
