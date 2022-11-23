import { IAuditory } from ".";
export default class Auditorium {
    /**
     * Набор информации по аудиториям
     */
    private static auditories;
    /**
     * @readonly
     * @property {IAuditory[]} Набор информации по аудиториям
     */
    static get Auditories(): IAuditory[];
    /**
     * Адрес получения данных об аудиториях
     */
    static URL: string;
    /**
     * Производит асинхронную загрузку данных
     */
    static Load(): Promise<void>;
}
