import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.scss'],
})
export class RequestCreateComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  targetGroup: FormGroup;
  contactGroup: FormGroup;
  interviewGroup: FormGroup;

  ngOnInit() {
    this.targetGroup = this.fb.group({
      kind: '',
      age: '',
      region: '',
      others: '',
    });
    this.contactGroup = this.fb.group({
      phone: '',
      name: '',
    });
    this.interviewGroup = this.fb.group({
      channel: '',
      place: '',
      time: '',
    });
  }

}
