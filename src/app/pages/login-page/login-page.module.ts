import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginPageComponent} from "./login-page.component";
import {LoginPageRoutingModule} from "./login-page-routing.module";
import {AdminLoginModule} from "../../admin/shared/components/admin-login/admin-login.module";


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    LoginPageRoutingModule,
    CommonModule,
    AdminLoginModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule {
}
