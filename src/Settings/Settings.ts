import { IAuthPost, IURLs } from "..";
import ShadowSettings from "./ShadowSettings";

/**
 * Установка всех необходимых настроек
 */
export default class Settings{

    public static set Auth(v:IAuthPost){
        ShadowSettings.Auth=v;
    }

    public static set URLS(v:IURLs){
        ShadowSettings.URLS=v;
    }
}