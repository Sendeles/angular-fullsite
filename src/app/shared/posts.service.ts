import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFbCreateResponse, IPost} from "../../environments/interface";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  //відправка на бекенд посту
  create (post: IPost):Observable<IPost> {
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
}
