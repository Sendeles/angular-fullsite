import {Pipe, PipeTransform} from "@angular/core";
import {IPost} from "../../../../environments/interface";

@Pipe({
  name: 'searchPosts'
})

export class SearchPipe implements PipeTransform {
  //Метод transform в качесвте входящего параметра массив posts типа IPots массив и вторым параметром буду получать некоторый search поу молчанию это будет пустая строка и возвращать я буду именно массив IPost[]
  transform(posts: IPost[], search = ''): IPost[] {
    //trim удаляет все лишине пробелы,то есть если строка пустая то я возвращаю просто массив постов, если не пустая фильтрую массив пост, на каждой операции получаю объект поста, фильтрую по тайтлу
    if (!search.trim()) {
      return posts
    } else {
      return posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase()) || post.author.toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
