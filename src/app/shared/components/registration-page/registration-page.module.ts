import {NgModule} from "@angular/core";
import {LoginPageComponent} from "../../../pages/login-page/login-page.component";
import {LoginPageRoutingModule} from "../../../pages/login-page/login-page-routing.module";
import {CommonModule} from "@angular/common";
import {RegistrationPageComponent} from "./registration-page.component";
import {RegistrationPageRoutingModule} from "./registration-page-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    RegistrationPageRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrationPageComponent
  ]
})
export class RegistrationPageModule {
}
