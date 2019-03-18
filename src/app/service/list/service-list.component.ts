import { Component, OnInit } from '@angular/core';
import { ServiceApi } from '../api/service-api.service';
import { ServiceModel } from '../../shared/models/service.model';

@Component({
  selector: 'app-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {

  items: ServiceModel[];

  constructor(private api: ServiceApi) {
  }

  ngOnInit() {
    this.api.query().subscribe(items => this.items = items);
  }
}
