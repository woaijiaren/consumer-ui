import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestFormApi } from '../../core/api/request-form-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.scss'],
})
export class RequestCreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private api: RequestFormApi,
    private snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute,
  ) {
  }

  workerGroup: FormGroup;
  customerGroup: FormGroup;
  interviewGroup: FormGroup;

  ngOnInit() {
    this.workerGroup = this.fb.group({
      workerType: '',
      workerAge: '',
      workerRegion: '',
      workerOthers: '',
    });
    this.customerGroup = this.fb.group({
      customerPhone: '',
      customerName: '',
    });
    this.interviewGroup = this.fb.group({
      interviewChannelType: '',
      interviewPlace: '',
      interviewTime: '',
    });
  }

  submit(): void {
    const result = { ...this.workerGroup.value, ...this.customerGroup.value, ...this.interviewGroup.value };
    this.api.create(result).pipe(
      switchMap(() => this.snackBar.open('预约成功，即将跳转到预约列表！', '', { duration: 2000 }).afterDismissed()),
      switchMap(() => from(this.router.navigateByUrl('./list', { relativeTo: this.route }))),
    ).subscribe();
  }
}
