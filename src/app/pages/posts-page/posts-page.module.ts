import {NgModule} from "@angular/core";
import {PostsPageComponent} from "./posts-page.component";
import {PostsPageRoutingModule} from "./posts-page-routing.module";
import {CommonModule} from "@angular/common";
import {HomePageModule} from "../home-page/home-page.module";

@NgModule({
  declarations: [
    PostsPageComponent,
  ],
  imports: [
    PostsPageRoutingModule,
    CommonModule,
    HomePageModule,
  ],
  exports: [
    PostsPageComponent
  ]
})

export class PostsPageModule {
}
