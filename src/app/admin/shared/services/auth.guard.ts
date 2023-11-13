import {inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }

//Если пользователь аутентифицирован, метод возвращает true, что позволяет продолжить навигацию к запрашиваемому маршруту, если нет очищает данные аутентификации и сессии пользователя.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return true
    } else {
      this.auth.logout();
      this.router.navigate(['/', 'logout'], {
        queryParams: {
          needToLogin: true,
          notAdmin: !this.auth.isAdmin()
        }
      })
      return false
    }
  }
}

//функция AuthGuardFunc, используется для инъекции AuthGuard и вызова его метода canActivate. Это позволяет использовать Guard вне класса, например, в модуле маршрутизации для проверки прав доступа при определении маршрутов.
export function AuthGuardFunc(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  const guard = inject(AuthGuard);
  return guard.canActivate(route, state);
}
