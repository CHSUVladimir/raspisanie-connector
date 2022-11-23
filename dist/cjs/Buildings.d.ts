import { IBuildingResponse } from ".";
export default class Buildings {
    /**
     * Набор информации по зданиям
     */
    private static buldings;
    /**
     * @readonly
     * @property {IBuildingResponse[]} Набор информации по зданиям
     */
    static get Buildings(): IBuildingResponse[];
    /**
     * Адрес получения данных о зданиях
     */
    static URL: string;
    /**
     * Процесс загрузки данных о зданиях
     */
    static Load(): Promise<void>;
}
