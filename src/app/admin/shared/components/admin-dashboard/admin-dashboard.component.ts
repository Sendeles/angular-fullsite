import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../../../shared/posts.service";
import {IPost} from "../../../../../environments/interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

//завожу переменную
  posts?: IPost[]
  pSub?: Subscription

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    //получаю посты от getAll
    this.pSub = this.postsService.getAll().subscribe(posts => {
      //присваиваю переменной пост(массиву) тот респонс который приходит
      this.posts = posts
      console.log('this.posts', this.posts)
    })
  }

  remove(id: string) {

  }

  ngOnDestroy() {
    //отписка для того что бы не было утечек памяти
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }
}
