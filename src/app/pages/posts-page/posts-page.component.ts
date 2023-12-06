import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../environments/interface";
import {PostsService} from "../../shared/posts.service";
import {ActivatedRoute, Routes} from "@angular/router";
import {mergeMap, Observable, of, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {CommonModule, Location} from "@angular/common";


@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit{

  // или оставить чисто этот код
  // subPost$: Observable<IPost> = of(this.router.snapshot.params['id'])
  //   .pipe(mergeMap((id) => this.postServ.getByID(id)))

  //Использовать оператор утверждения о ненулевом значении (!): Если вы уверены, что post будет инициализировано перед использованием, вы можете использовать оператор утверждения о ненулевом значении (!), чтобы сказать TypeScript, что вы осознанно отклоняете проверку на undefined
  subPost$!: Observable<IPost>
  posts$!: Observable<IPost[]>

  constructor(
    private postServ: PostsService,
    private router: ActivatedRoute,
    private location: Location,
      ) {
    const {id} = this.router.snapshot.params;

    if (id) {
      // Если есть параметр id в URL, значит, это запрос на отображение одиночного поста
      this.subPost$ = this.postServ.getByID(id);
    } else {
      // В противном случае, это запрос на отображение списка постов
      this.posts$ = this.postServ.getAll();
    }

  }

  truncateText(content: string) {
    //реплейс данная функция убирает все HTML знаки, и потому мы не обрезаем в конце </p>
    return content.replace(/<[^>]*>/g, '');
  }

  goBack() {
    this.location.back()
  }

  ngOnInit() {

  }

}

