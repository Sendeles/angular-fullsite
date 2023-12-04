import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../environments/interface";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit{

  //Использовать оператор утверждения о ненулевом значении (!): Если вы уверены, что post будет инициализировано перед использованием, вы можете использовать оператор утверждения о ненулевом значении (!), чтобы сказать TypeScript, что вы осознанно отклоняете проверку на undefined
  @Input() post!: IPost

  constructor() {
  }

  ngOnInit() {
  }

}
