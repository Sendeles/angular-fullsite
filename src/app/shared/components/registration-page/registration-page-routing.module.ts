import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegistrationPageComponent} from "./registration-page.component";

const routes: Routes = [
  {
    path: '', component: RegistrationPageComponent, pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RegistrationPageRoutingModule {
}
