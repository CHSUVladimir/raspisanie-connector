import { IAuthPost, IURLs } from "..";
export default class ShadowSettings {
    private static auth;
    private static urls;
    static set Auth(v: IAuthPost);
    static get Auth(): IAuthPost;
    static set URLS(v: IURLs);
    static get URLS(): IURLs;
}
