import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFbCreateResponse, IPost} from "../../environments/interface";
import {environment} from "../../environments/environment";
import {map, tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  //відправка на бекенд посту
  create(post: IPost): Observable<IPost> {
    return this.http.post<IFbCreateResponse>(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(
        map((response: IFbCreateResponse) => {
          return {
            ...post,
            id: response.name,
            date: new Date(post.date)
          }
        }))
  }

  //Получение всех постов что у нас есть на бекэнде
  getAll(): Observable<IPost []> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(
        //вывожу все посты в консоль через tap
        tap(data => console.log('recive data', data)),
        // преобразует объект ответа в массив постов.  post1: { author: "1", content: "<p>1</p>", date: "2023-11-15T21:08:14.454Z", title: "1" }, post2: { author: "2", content: "<p>2</p>", date: "2023-11-15T21:08:14.454Z", title: "2" }
        map((response: { [key: string]: any }) => {
          //распарсиваем объект
          return Object
            //массив айдишников, то есть каждый объ`ект становится массивом. Object.keys(response) берет все ключи из объекта response. В вашем случае, это будут ['post1', 'post2'].
            .keys(response)
            //преобразовать каждый ключ в новый объект, (смотри дальше =>)
            .map((key) => ({
              // просто в { author: "1", content: "<p>1</p>", date: "2023-11-15T21:08:14.454Z", title: "1" }, уже без  "post1:" то есть как будто делаем безымянным, тоже самое с post2
              ...response[key],
              // Добавляем ключ в качестве свойства id, каждый объект получает дополнительно id: "post1" получается:{ author: "1", content: "1", title: "1", date: "2021-01-01T00:00:00.000Z", id: "post1" - и вот добавилось свойство id}, тоже самое с post2, если бы не было id: key было бы просто { author: "1", content: "<p>1</p>", date: "2023-11-15T21:08:14.454Z", title: "1" }
              id: key,
              // Преобразуем строку даты в объект Date  date: [object Date], вместо date: "2021-01-01T00:00:00.000Z"
              date: new Date(response[key].date)
            }))
        }))
  }
}
