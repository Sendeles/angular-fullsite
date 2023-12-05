import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {UiSliderModule} from "../../modules/ui-slider/ui-slider.module";
import {PostsPageModule} from "../posts-page/posts-page.module";
import {PostComponent} from "../../shared/components/post/post.component";
import {AdminModule} from "../../admin/admin.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    HomePageComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    UiSliderModule,
    AdminModule,
  ],
  exports: [
    HomePageComponent,
    PostComponent
  ]
})

export class HomePageModule {

}
