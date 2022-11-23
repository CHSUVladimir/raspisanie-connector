import { IAuthPost, IURLs } from ".."
import Auditorium from "../Auditorium"
import Buildings from "../Buildings"
import Connector from "../Connector"
import TimeTable from "../TimeTable"

/**
 * Установка всех необходимых настроек
 */
export default class Settings {
   public static set Auth(v: IAuthPost) {
      Connector.Auth = v
   }

   public static set URLS(v: IURLs) {
      Connector.SiginUrl = v.main + v.Signin
      Connector.ValidationUrl = v.main + v.Validation
      Buildings.URL = v.main + v.Building
      Auditorium.URL = v.main + v.Auditorium
      TimeTable.URL = v.main + v.TimeTable
   }
}
