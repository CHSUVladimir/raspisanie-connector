import { IAuthPost, IAuthResponse } from "."

export default class Connector {
   /**
    * Адрес получения ссесии
    */
   public static SiginUrl: string
   /**
    * Адрес проверки ссесии
    */
   public static ValidationUrl: string
   /**
    * Данные авторизации
    */
   public static Auth: IAuthPost
   /**
    * Идентификатор ссесии
    */
   public static SesionId: string

   /**
    * Подключается к серверу API и устанавливает соединение
    */
   public async Connect(): Promise<void> {
      Connector.SesionId = ""
      const res: IAuthResponse = await global
         .fetch(Connector.SiginUrl, {
            method: "POST",
            mode: "cors",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(Connector.Auth),
         })
         .then((resp) => resp.json())
      if (res && !res.error) {
         Connector.SesionId = res.data
      } else {
         const erop: ErrorOptions = {
            cause: res,
         }
         throw new Error(res.error?.description, erop)
      }
   }

   /**
    * проверка актуальности текущего идентификатора ссесии на сервере API
    * @returns {Promise<boolean>} ожидание ответа сервера
    */
   public async Validate(): Promise<boolean> {
      try {
         const res: boolean = await global
            .fetch(Connector.ValidationUrl, {
               method: "POST",
               mode: "cors",
               headers: {
                  "Content-Type": "application/json",
               },
               body: Connector.SesionId,
            })
            .then((resp) => resp.json())
         return res
      } catch {
         return false
      }
   }
}
