import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminLayoutComponent} from "../../layout/admin-layout/admin-layout.component";
import {AdminLoginComponent} from "./admin-login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminLoginComponent
  ],
  providers: [AuthService]
})

export class AdminLoginModule {}
