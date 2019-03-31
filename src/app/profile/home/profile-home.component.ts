import { Component, OnInit } from '@angular/core';
import { UserApi } from '../../core/api/user-api.service';
import { UserModel } from '../../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss'],
})
export class ProfileHomeComponent implements OnInit {

  me: UserModel;

  constructor(private userApi: UserApi) {
  }

  ngOnInit() {
    this.userApi.me().subscribe(me => this.me = me);
  }

}
