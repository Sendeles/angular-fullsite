import {NgModule} from "@angular/core";
import {PostComponent} from "./post.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule {}
