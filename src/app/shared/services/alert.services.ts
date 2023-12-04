import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {IAlerts} from "../models/alerts/alerts.model";

export type AlertType = 'success' | 'warning' | 'delete'

@Injectable()

export class AlertServices {
//$ - означает стрим
  public alerts$ = new Subject<IAlerts>()

  success(text: string) {
    this.alerts$.next({type: 'success', text})
  }

  warning(text: string) {
    this.alerts$.next({type: 'warning', text})
  }

  delete(text: string) {
    this.alerts$.next({type: 'delete', text})
  }


}
