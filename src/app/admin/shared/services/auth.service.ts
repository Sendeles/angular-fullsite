import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IAuthResponse, IUser} from "../../../shared/models/user/user.model";
import {BehaviorSubject, catchError, finalize, Observable, Subject, tap, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";
// import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
@Injectable()

export class AuthService {

  public error$: Subject<string> = new Subject<string>();


  constructor(
    private http: HttpClient
  ) {

  }

//разлогинивается акк если срок действия токена закончился
  get token(): string {
    const expDateStr = localStorage.getItem('fb-token-expired');
    if (expDateStr != null) {
      const expDate = new Date(expDateStr)
      if (new Date() > expDate) {
        this.logout()
        return ''
      }
    }
    const token = localStorage.getItem('fb-token')
    return token !== null ? token : '';
  }

  //отправка данных на бекенд для логинизации
  login(user: IUser): Observable<IAuthResponse> {
    user.returnSecureToken = true;
    return this.http.post<IAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError((error: HttpErrorResponse) => this.handleError(error))
        // this.handleError.bind(this)
      );
  }

//удаление из локал стораджа данных что бы разлогинется
  logout() {
    localStorage.removeItem('fb-token');
    localStorage.removeItem('fb-token-expired');
  }

  // ввод имени пользователя и пароля, которые затем сверяются с хранящимися данными
  isAuthenticated() {
    return !!this.token
  }

//определение является ли залогиненый акк - админским
  isAdmin(): boolean {
    const email = this.getCurrentUserEmail();
    return email === 'test@gmail.com';
  }


  getCurrentUserEmail(): string | null {
    // const user = firebase.auth().currentUser;
    const user = getAuth().currentUser;
    return user ? user.email : null;
  }

//высвечивание ошибки в случае неверного ввода логина и пароля
  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error

    switch (message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        this.error$.next('Неверный email или пароль')
        break;
    }

    return throwError(() => error)


  }


  private setToken(response: IAuthResponse) {
    console.log(response, 'response')
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-expired', expDate.toString())
    } else {
      localStorage.clear()
    }

  }
}
