import { IAuditory } from ".";
import Connector from "./Connector";

export default class Auditorium{
    /**
     * Набор информации по аудиториям
     */
    private static auditories:IAuditory[]=[];

    /**
     * @readonly
     * @property {IAuditory[]} Набор информации по аудиториям
     */
    public static get Auditories():IAuditory[]{
        return this.auditories;
    }

    /**
     * Адрес получения данных об аудиториях
     */
    public static URL:string;

    /**
     * Производит асинхронную загрузку данных
     */
    public static async Load():Promise<void>{
        try{
            const res= await fetch(Auditorium.URL, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer "+Connector.SesionId
                  },
                method: 'GET',
                mode: 'cors'
              }).then(resp => resp.json());
              if(res && !res.code){
                this.auditories = res;
              }else{
                if(res.code){
                    throw new Error("Unauthorized (Token is not valid)",{cause:res});
                }else{
                    throw new Error("Unauthorized");
                }
              }
        }catch(er){
            const err = er as any;
            if(err.message.includes("Unauthorized")){
                throw er;
            }else{
                throw new Error("Unauthorized or connection lost!", {cause:er});
            }
        }

    }
}

