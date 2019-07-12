import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.less']
})
export class AdminHeaderComponent implements OnInit {
  private isModal: boolean;
  private user: object;
  public userFirstName: string;
  constructor() {
    this.isModal = false;
    this.user = {
      firstName: 'Andrew',
      lastName: 'Stollak',
      hasRole: function(role) {
        return true;
      }
    };
  }

  ngOnInit() {
    this.userFirstName = 'Nuke';
  }

}
