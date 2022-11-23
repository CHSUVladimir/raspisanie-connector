import { ITimeTable } from ".";
import Connector from "./Connector";


export default class TimeTable{
    
    /**
     * Набор расписания
     */
    private static timeTable:ITimeTable[];

    /**
     * @readonly
     * @property {ITimeTable[]} Набор информации по расписанию
     */
    public static get TimeTable():ITimeTable[]{
        return this.timeTable;
    }
    
    /**
     * Адрес получения данных расписания
     */
    public static URL:string;

    /**
     * Загружает данные расписания для указанных дат
     * @param {Date} ds Дата начала промежутка
     * @param {Date} de Дата окончания промежутка
     */
    public static async Load(ds:Date, de:Date):Promise<void>{
        
        try{
            const rurl =this.URL.replace('{startDt}', this.DateToUrlString(ds)).replace('{endDt}', this.DateToUrlString(de));
            const res= await fetch(rurl, {
                    headers: {
                                'Content-Type': 'application/json',
                                "Authorization": "Bearer "+Connector.SesionId
                            },
                    method: 'GET',
                    mode: 'cors'
                }).then(resp => resp.json());
                if(res && !res.code){
                    this.timeTable = res;
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

    /**
     * Преобразовывает дату в строку для запроса данных
     * @param {Date} d Дата для преобразования
     * @returns {string} преобразованная в строку формата дд.ММ.гггг дата
     */
    private static DateToUrlString(d:Date):string{
        const diso =d.toISOString().split('T')[0].split('-');
        return `${diso[2]}.${diso[1]}.${diso[0]}`;
    }

    /**
     * Фильтрует по конкретной аудитории загруженное расписание, и оставляет данные только по заданной аудитории
     * @param {number} aid 
     */
    public static FilterByAuditory(aid:number):void
    /**
     * Фильтрует по заданным аудиториям загруженное расписание, и оставляет данные только для заданных аудиторий
     * @param {number[]} aid 
     */
    public static FilterByAuditory(aid:number[]):void
    /**
     * Фильтрует по заданым условиям для аудиторий и оставляет данные только для аудиторий
     * @param {number|number[]} aid условия для аудиторий (идентификаторы)
     */
    public static FilterByAuditory(aid:number|number[]):void{
        const ar = aid as number[];
        if(ar.length){
            this.timeTable=this.timeTable.filter(m=>ar.indexOf(m.auditory.id)>-1);
        }else{
            const id = aid as number;
            this.timeTable=this.timeTable.filter(m=>m.auditory.id===id);
        }
    }
}