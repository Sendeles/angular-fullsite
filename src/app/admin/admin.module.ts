import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminLayoutComponent} from "./shared/layout/admin-layout/admin-layout.component";
import { AdminDashboardComponent } from './shared/components/admin-dashboard/admin-dashboard.component';
import { AdminCreateComponent } from './shared/components/admin-create/admin-create.component';
import { AdminEditComponent } from './shared/components/admin-edit/admin-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./shared/services/auth.guard";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminDashboardComponent,
    AdminCreateComponent,
    AdminEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    AdminCreateComponent
  ],
  providers: [AuthService, AuthGuard]
})

export class AdminModule {}
