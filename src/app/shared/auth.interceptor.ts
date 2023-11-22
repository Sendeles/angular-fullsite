import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../admin/shared/services/auth.service";
import {Router} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  //Добавление токена для каждого запроса, если токен присутсвует и пользователь зарегестрирован(авторизован), отлов ошибок с бэк енда, и если 401 то перенаправляем через параметры
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token
        }
      })
    }
    return next.handle(req)
      .pipe(
        tap(() => {
          console.log('Intercept')
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('interceptor error', error)
          if (error.status === 401) {
            this.auth.logout()
            this.router.navigate(['/', 'logout']), {
              queryParams: {
                authFailed: true
              }
            }
          }
          return throwError(error);
        })
      )
  }

}
