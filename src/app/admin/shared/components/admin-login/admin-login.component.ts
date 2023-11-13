import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MyValidators} from "./my.validators";
import {pageLink} from "../../../../shared/constants/pagelink";
import {IUser} from "../../../../shared/models/user/user.model";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {


  public form: FormGroup;
  private emailPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  submitted = false
  errorMessage: string = '';
  message: string = ''


  constructor(
    private router: Router,
    public auth: AuthService,
    private route: ActivatedRoute
  ) {
    this.form = this.getBlankForm()
  }

  //Внутри подписчика проверяется, содержит ли объект params свойство needToLogin. Если это свойство присутствует и истинно, для свойства message компонента устанавливается сообщение на русском языке: "данное поле будет доступно после входа
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['needToLogin']) {
        this.message = 'данное поле будет доступно после входа'
      }
    })
  }


  getBlankForm(): FormGroup {
    return new FormGroup<any>({
      email: new FormControl<string>('', [Validators.pattern(this.emailPattern), Validators.required, MyValidators.restrictedEmail]),
      password: new FormControl<string>('', [Validators.minLength(4), Validators.maxLength(12)])
    })
  }

  submit() {
    console.log(this.form)
    const formData = (this.form.value)
    console.log(formData)

    if (this.form.invalid) {
      return
    }
    this.submitted = true

//отправка объекта, и получение результата куда перекидывать в случае успешного захода
    const user: IUser = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }
    console.log('user', user)
    this.auth.login(user).subscribe({
      next: () => {
        this.form.reset()
        this.submitted = false
        if (user.email === 'test@gmail.com') {
          this.router.navigate(['/admin', 'dashboard'])
        } else {
          this.router.navigate(['/'])
        }
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
    console.log('user', user)
  }

  getRegistrationForm() {
    this.router.navigate([pageLink.REGISTRATION_PAGE]);
    console.log('click')
  }

  extractDomain(email: string | null): string {
    if (email) {
      const atIndex = email.indexOf('@');
      if (atIndex >= 0) {
        return email.substring(atIndex + 1);
      }
    }
    return '';
  }

  get passwordLength(): number {
    const passwordControl = this.form.get('password');
    if (passwordControl && passwordControl.value) {
      return passwordControl.value.length;
    }
    return 0;
  }
}
