import {NgModule} from "@angular/core";
import {NewsPageComponent} from "./news-page.component";
import {NewsPageRoutingModule} from "./news-page-routing.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    NewsPageComponent
  ],
  imports: [
    NewsPageRoutingModule,
    CommonModule
  ],
  exports: [
    NewsPageComponent
  ]
})
export class NewsPageModule {
}
