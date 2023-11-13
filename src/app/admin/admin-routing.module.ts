import {NgModule} from "@angular/core";
import {mapToCanActivate, RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "./shared/layout/admin-layout/admin-layout.component";
import {AdminLoginComponent} from "./shared/components/admin-login/admin-login.component";
import {AdminDashboardComponent} from "./shared/components/admin-dashboard/admin-dashboard.component";
import {AdminCreateComponent} from "./shared/components/admin-create/admin-create.component";
import {AdminEditComponent} from "./shared/components/admin-edit/admin-edit.component";
import {AuthGuardFunc} from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '', redirectTo: '/admin/login', pathMatch: 'full'
      },
      {
        path: 'login', component: AdminLoginComponent, pathMatch: 'full'
      },
      {
        path: 'dashboard', component: AdminDashboardComponent, pathMatch: 'full', canActivate: [AuthGuardFunc]
      },
      {
        path: 'create', component: AdminCreateComponent, pathMatch: 'full', canActivate: [AuthGuardFunc]
      },
      {
        path: 'post/:id/edit', component: AdminEditComponent, pathMatch: 'full', canActivate: [AuthGuardFunc]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AdminRoutingModule {
}
