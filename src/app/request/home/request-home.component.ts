import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestFormApi } from '../../core/api/request-form-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './request-home.component.html',
  styleUrls: ['./request-home.component.scss'],
})
export class RequestHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private api: RequestFormApi) {
    this.api.query().subscribe((items) => {
      const nextUrl = items.length === 0 ? 'create' : 'list';
      this.router.navigate([nextUrl], { relativeTo: this.route });
    });
  }

  ngOnInit() {
  }

}
