import { IAuthPost } from ".";
export default class Connector {
    /**
     * Адрес получения ссесии
     */
    static SiginUrl: string;
    /**
     * Адрес проверки ссесии
     */
    static ValidationUrl: string;
    /**
     * Данные авторизации
     */
    static Auth: IAuthPost;
    /**
     * Идентификатор ссесии
     */
    static SesionId: string;
    /**
     * Подключается к серверу API и устанавливает соединение
     */
    Connect(): Promise<void>;
    /**
     * проверка актуальности текущего идентификатора ссесии на сервере API
     * @returns {Promise<boolean>} ожидание ответа сервера
     */
    Validate(): Promise<boolean>;
}
