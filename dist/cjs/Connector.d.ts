import { IAuthPost } from ".";
export default class Connector {
    static SiginUrl: string;
    static ValidationUrl: string;
    static Auth: IAuthPost;
    static SesionId: string;
    Connect(): Promise<void>;
}
