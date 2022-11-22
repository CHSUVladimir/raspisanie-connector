import { IAuthPost, IURLs } from "..";
import Connector from "../Connector";


export default class ShadowSettings{
    private static auth:IAuthPost;
    private static urls:IURLs;

    public static set Auth(v:IAuthPost){
        this.auth=v;
    }

    public static get Auth():IAuthPost{
        return this.auth;
    }

    public static set URLS(v:IURLs){
        Connector.SiginUrl=v.main+v.Signin;
        Connector.ValidationUrl=v.main+v.Validation;
        this.urls=v;
    }

    public static get URLS():IURLs{
        return this.urls;
    }
}