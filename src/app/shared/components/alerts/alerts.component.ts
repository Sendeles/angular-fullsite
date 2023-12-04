import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AlertServices} from "../../services/alert.services";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit, OnDestroy {

  //сколько визуально показывать данный алерт
  @Input() delay = 5000

  public text: string = ''
  public type = 'success'
  alertSub?: Subscription

  constructor(private alertServices: AlertServices) {
  }

  ngOnInit() {
    this.alertSub = this.alertServices.alerts$.subscribe(alert => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout( () => {
        //очистка таймаута для избежания утечек памяти
        clearTimeout(timeout)
        // присваивание пустого значения, когда пустое значение текст сам по себе исчезнет
        this.text = ''
        //Таймаут по параметру this.delay
      }, this.delay)
    })
  }

  ngOnDestroy() {
    if (this.alertSub) {
      this.alertSub.unsubscribe()
    }

  }

}
