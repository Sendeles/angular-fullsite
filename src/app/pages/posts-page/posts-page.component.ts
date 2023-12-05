import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../environments/interface";
import {PostsService} from "../../shared/posts.service";
import {ActivatedRoute, Routes} from "@angular/router";
import {mergeMap, Observable, of, Subscription} from "rxjs";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit{

  //Использовать оператор утверждения о ненулевом значении (!): Если вы уверены, что post будет инициализировано перед использованием, вы можете использовать оператор утверждения о ненулевом значении (!), чтобы сказать TypeScript, что вы осознанно отклоняете проверку на undefined
  // @Input() post!: IPost;


  // или оставить чисто этот код
  // subPost$: Observable<IPost> = of(this.router.snapshot.params['id'])
  //   .pipe(mergeMap((id) => this.postServ.getByID(id)))

  //вместо
  subPost$!: Observable<IPost>

  constructor(
    private postServ: PostsService,
    private router: ActivatedRoute
      ) {
    //вместо
    const {id} = this.router.snapshot.params;
    this.subPost$ = this.postServ.getByID(id);
    console.log('this.router', this.router)
  }

  ngOnInit() {

  }

}

