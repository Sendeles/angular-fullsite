import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../environments/interface";
import {TruncateServices} from "../../services/truncate.services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  //Использовать оператор утверждения о ненулевом значении (!): Если вы уверены, что post будет инициализировано перед использованием, вы можете использовать оператор утверждения о ненулевом значении (!), чтобы сказать TypeScript, что вы осознанно отклоняете проверку на undefined
  @Input() post!: IPost;
  truncatedContent: string = '';

  constructor(
    private truncateService: TruncateServices
  ) {
  }

  ngOnInit() {
    this.truncatedContent = this.truncateService.truncateText(this.post.content);
  }
}
