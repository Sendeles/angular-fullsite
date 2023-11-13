import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IPost} from "../../../../../environments/interface";
import {PostsService} from "../../../../shared/posts.service";

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

  constructor(private postServ: PostsService) {
  }

  ngOnInit() {

  }

  markAsNecessery() {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched()
    });
  }

  //Сама кнопка onSubmit
  onSubmit(): void {
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
    })
  }


}
