import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IPost} from "../../../../../environments/interface";
import {PostsService} from "../../../../shared/posts.service";
import {AlertServices} from "../../../../shared/services/alert.services";

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {

  //кнопку Create Post выталкиваем пониже
  editorStyles = {
    height: '35%'
  };

  //настройка формы и установка валидаторовр
  form: FormGroup = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    date: new FormControl(new Date())
  });

  constructor(
    private postServ: PostsService,
    private alertServ: AlertServices
  ) {
  }

  ngOnInit() {

  }

  //функция которая не позволяет что бы поля оставались пустые, мы ее задействуем в сабмите
  //Object.values(this.form.controls): Эта строка извлекает все элементы управления (controls), которые являются частью формы
  //.forEach(control => {...}): Здесь используется метод forEach для перебора всех элементов управления в форме. Для каждого элемента управления (указанного как control) выполняется функция, указанная внутри фигурных скобок.
  markAsNecessery() {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
      console.log( ' control.markAsTouched()', control.markAsTouched())
    });

  }

  //Сама кнопка onSubmit
  onSubmit(): void {
    console.log( 'this.form', this.form)
    if (this.form.valid) {
      console.log('this.form.getRawValue()', this.form.getRawValue());
    } else {
      this.markAsNecessery();
    }

    //создание объекта для отправки на бекенд в данной формулировке
    const post: IPost = {
      author: this.form.value.author,
      title: this.form.value.title,
      content: this.form.value.content,
      date: new Date()
    }

    //что бы после успешного поста на бекенд очищался пост
    this.postServ.create(post).subscribe(() => {
      this.form.reset()
      this.alertServ.success('Пост был создан')
    })
  }


}
