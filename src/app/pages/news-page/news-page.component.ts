import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IData, IInfo} from "../../shared/models/news/news.model";





@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  public data!: Observable<IInfo[]>;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.data = this.http.get<IData>('https://newsdata.io/api/1/news?apikey=pub_276881c0e1b785f09b22221280f401c013cb6&q=cryptocurrency')
      .pipe(
        map((res: IData) => {
          return res.results
        })
      );

    console.log(' this.data',  this.data);
  }
}




