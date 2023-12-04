import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import { QuillModule } from 'ngx-quill';
import { AlertsComponent } from './components/alerts/alerts.component'
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
    exports: [
        HttpClientModule,
        QuillModule,
        AlertsComponent
    ],
  declarations: [
    AlertsComponent
  ]
})

export class SharedModule {}
