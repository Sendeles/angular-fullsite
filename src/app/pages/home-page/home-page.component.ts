import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../shared/posts.service";
import {Observable} from "rxjs";
import {IPost} from "../../../environments/interface";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  img = './assets/image/olga-background.jpg'

  posts$!: Observable<IPost[]>

  constructor(
    private postServ: PostsService
  ) {
  }

  ngOnInit() {
    this.posts$ = this.postServ.getAll()
    console.log('this.posts$', this.posts$)
  }

}
