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
  posts: IPost[] = []
  pSub?: Subscription
  rSub?: Subscription
  searchPost = ''

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

  //в posts.srvice.ts метод прописали а здесь его вызываем
  remove(id: string) {
   this.rSub = this.postsService.remove(id).subscribe(() => {
      //перебираем список постов после удаления какого-то поста
      this.posts = this.posts.filter((post) => post.id !== id)
    })

  }

  ngOnDestroy() {
    //отписка для того что бы не было утечек памяти
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }
}
