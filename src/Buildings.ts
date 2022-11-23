import { IBuildingResponse } from "."
import Connector from "./Connector"

export default class Buildings {
   /**
    * Набор информации по зданиям
    */
   private static buldings: IBuildingResponse[] = []

   /**
    * @readonly
    * @property {IBuildingResponse[]} Набор информации по зданиям
    */
   public static get Buildings(): IBuildingResponse[] {
      return this.buldings
   }

   /**
    * Адрес получения данных о зданиях
    */
   public static URL: string

   /**
    * Процесс загрузки данных о зданиях
    */
   public static async Load(): Promise<void> {
      try {
         const res = await fetch(Buildings.URL, {
            headers: {
               "Content-Type": "application/json",
               Authorization: "Bearer " + Connector.SesionId,
            },
            method: "GET",
            mode: "cors",
         }).then((resp) => resp.json())
         if (res && !res.code) {
            Buildings.buldings = res
         } else {
            if (res.code) {
               throw new Error("Unauthorized (Token is not valid)", { cause: res })
            } else {
               throw new Error("Unauthorized")
            }
         }
      } catch (er) {
         const err = er as any
         if (err.message.includes("Unauthorized")) {
            throw er
         } else {
            throw new Error("Unauthorized or connection lost!", { cause: er })
         }
      }
   }
}
