import {RouterModule, Routes} from "@angular/router";
import {PostsPageComponent} from "./posts-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: PostsPageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsPageRoutingModule {

}
