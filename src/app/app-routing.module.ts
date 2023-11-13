import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'news',
        loadChildren: () => import('./pages/news-page/news-page.module').then(m => m.NewsPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'posts/:id',
        loadChildren: () => import('./pages/posts-page/posts-page.module').then(m => m.PostsPageModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./pages/posts-page/posts-page.module').then(m => m.PostsPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'login',
        loadChildren: () => import ('./admin/shared/components/admin-login/admin-login.module').then(m => m.AdminLoginModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./shared/components/registration-page/registration-page.module').then(m => m.RegistrationPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/create-page/create-page.module').then(m => m.CreatePageModule)
      },
      // {
      //   path: 'admcreate',
      //   loadChildren: () => import('./admin/shared/components/admin-create/admin-create.module').then(m => m.AdminCreateModule)
      // },
      {
        path: '**',
        redirectTo: '/', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
