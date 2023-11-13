import {Component, NgModule, OnInit} from '@angular/core';
import {AuthService} from "../../../admin/shared/services/auth.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  showSiteLayout: boolean = true

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.showSiteLayout = !this.auth.isAdmin()
  }


}
