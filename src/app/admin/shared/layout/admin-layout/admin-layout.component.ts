import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../../components/admin-login/my.validators";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  showAdminLayout: boolean = false

  constructor(
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.showAdminLayout = this.auth.isAdmin();
  }

  // get isAdmin(): boolean {
  //   return this.auth.isAdmin()
  // }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
