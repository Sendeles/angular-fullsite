import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CreatePageComponent} from "./create-page.component";
import {CreatePageRoutingModule} from "./create-page-routing.module";
import {AdminModule} from "../../admin/admin.module";

@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CreatePageRoutingModule,
    CommonModule,
    AdminModule,
  ],
  exports: [
    CreatePageComponent
  ]
})
export class CreatePageModule {
}
