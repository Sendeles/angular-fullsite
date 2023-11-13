import {NgModule} from "@angular/core";
import {PostsPageComponent} from "./posts-page.component";
import {PostsPageRoutingModule} from "./posts-page-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PostsPageComponent,
  ],
  imports: [
    PostsPageRoutingModule,
    CommonModule,
  ],
  exports: [
    PostsPageComponent
  ]
})

export class PostsPageModule {
}
