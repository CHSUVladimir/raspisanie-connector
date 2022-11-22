import { IAuthPost, IURLs } from "..";
/**
 * Установка всех необходимых настроек
 */
export default class Settings {
    static set Auth(v: IAuthPost);
    static set URLS(v: IURLs);
}
