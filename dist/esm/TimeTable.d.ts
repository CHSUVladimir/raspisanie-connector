import { ITimeTable } from ".";
export default class TimeTable {
    /**
     * Набор расписания
     */
    private static timeTable;
    /**
     * @readonly
     * @property {ITimeTable[]} Набор информации по расписанию
     */
    static get TimeTable(): ITimeTable[];
    /**
     * Адрес получения данных расписания
     */
    static URL: string;
    /**
     * Загружает данные расписания для указанных дат
     * @param {Date} ds Дата начала промежутка
     * @param {Date} de Дата окончания промежутка
     */
    static Load(ds: Date, de: Date): Promise<void>;
    /**
     * Преобразовывает дату в строку для запроса данных
     * @param {Date} d Дата для преобразования
     * @returns {string} преобразованная в строку формата дд.ММ.гггг дата
     */
    private static DateToUrlString;
    /**
     * Фильтрует по конкретной аудитории загруженное расписание, и оставляет данные только по заданной аудитории
     * @param {number} aid
     */
    static FilterByAuditory(aid: number): void;
    /**
     * Фильтрует по заданным аудиториям загруженное расписание, и оставляет данные только для заданных аудиторий
     * @param {number[]} aid
     */
    static FilterByAuditory(aid: number[]): void;
}
