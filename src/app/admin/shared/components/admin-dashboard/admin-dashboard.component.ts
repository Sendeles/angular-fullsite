import {Component, OnDestroy, OnInit, SecurityContext} from '@angular/core';
import {PostsService} from "../../../../shared/posts.service";
import {IPost} from "../../../../../environments/interface";
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {AlertServices} from "../../../../shared/services/alert.services";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

//завожу переменную
  posts: IPost[] = []
  pSub?: Subscription
  rSub?: Subscription
  searchPost = ''

  constructor(
    private postsService: PostsService,
    private alertServices: AlertServices
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

//обрезание текста до 60 символов и остальное ....
  truncateText(content: string) {
    const maxLength = 60;
    //реплейс данная функция убирает все HTML знаки, и потому мы не обрезаем в конце </p>
    content = content.replace(/<[^>]*>/g, '');
    const truncatedText = content.length > maxLength
      ? content.substring(0, maxLength) + '...'
      : content;
    console.log('content.content.length', content.length)
    return truncatedText;
  }

  //в posts.srvice.ts метод прописали а здесь его вызываем
  remove(id: string) {
   this.rSub = this.postsService.remove(id).subscribe(() => {
      //перебираем список постов после удаления какого-то поста
      this.posts = this.posts.filter((post) => post.id !== id)
     this.alertServices.delete('Пост был удален')
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
