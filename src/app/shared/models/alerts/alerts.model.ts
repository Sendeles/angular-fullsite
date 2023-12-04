import {AlertType} from "../../services/alert.services";

export interface IAlerts {
  type: AlertType,
  text: string
}
