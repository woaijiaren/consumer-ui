import { Component, OnInit } from '@angular/core';
import { ServiceApi } from '../api/service-api.service';
import { ServiceModel } from '../../shared/models/service.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-service-show',
  templateUrl: './service-show.component.html',
  styleUrls: ['./service-show.component.scss'],
})
export class ServiceShowComponent implements OnInit {

  item: ServiceModel;

  constructor(private api: ServiceApi, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.api.get(id)),
      tap(item => this.item = item),
    ).subscribe();
  }

}
