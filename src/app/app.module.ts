import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AdminLoginModule} from "./admin/shared/components/admin-login/admin-login.module";
import {RegistrationPageComponent} from "./shared/components/registration-page/registration-page.component";
import {SharedModule} from "./shared/shared.module";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {CreatePageComponent} from './pages/create-page/create-page.component';
import {AuthInterceptor} from "./shared/auth.interceptor";
// import { RegistrationPageComponent } from './shared/components/registration-page/registration-page.component';

const firebaseConfig = {
  apiKey: "AIzaSyB6CTb_LhX3qJ7YbLqp3ydbbP0-TGIBAbs",
  authDomain: "angular-fullsite.firebaseapp.com",
  projectId: "angular-fullsite",
  storageBucket: "angular-fullsite.appspot.com",
  messagingSenderId: "783752291524",
  appId: "1:783752291524:web:117e29f62e4dd769c95591"
};

const INTERCEPTORS_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminLoginModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    INTERCEPTORS_PROVIDER
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
