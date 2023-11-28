import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../../../shared/posts.service";
import {Subscription, switchMap} from "rxjs";
import {IPost} from "../../../../../environments/interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../environments/environment";
import {pageLink} from "../../../../shared/constants/pagelink";

@Component({
  selector: 'app-edit-page',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit, OnDestroy {

  editorStyles = {
    height: '35%'
  };

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  post?: IPost;
  submitted = false
  updateSub: Subscription = new Subscription()


  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        //Оператор switchMap для того что бы изменить стрим. Stream Поток можно понимать как источник и/или приёмник бесконечного количества символов. Потоки обычно привязываются к физическому источнику/приёмнику символов, например, файлу, клавиатуре или консоли.
        switchMap((params: Params) => {
          //возврашаем из оператора switchMap новый стрим куда передаем значение params по его ключу id
          return this.postService.getByID(params['id'])
        })
        //вызываем сабскрайб через него вызываем callback
      ).subscribe((post: IPost) => {
        //сохраняю объект в переменную что бы проще было с ним работать в submit()
      this.post = post
      //инициализируем форму которая позволяет менять данные поста
      this.form.patchValue({
        title: post.title,
        content: post.content
      })
    })
  }

  ngOnDestroy() {
    if (this.updateSub) {
      this.updateSub.unsubscribe()
    }
  }

  submit() {
    //Если форма не заполнена как нужно, то кнопка Edit не нажмется
    if (this.form.invalid) {
      return
      //Еслив се хорошо то тогда обращаемся к сервису пост сервис вызывать метод апдейт и в него передавать новый объект который будет являться постом
    } else {
      this.submitted = true
      this.updateSub = this.postService.update({
        //убеждаем TypeScript, что this.post действительно соответствует требованиям интерфейса IPost, Spread используем для копирования всех свойств из this.post в новый объект
          ...(this.post as IPost),
        content: this.form.value.content,
        title: this.form.value.title
      }).subscribe(() => {
        this.submitted = false
      })
    }

  }



}
