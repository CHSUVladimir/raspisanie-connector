"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connector {
    /**
     * Адрес получения ссесии
     */
    static SiginUrl;
    /**
     * Адрес проверки ссесии
     */
    static ValidationUrl;
    /**
     * Данные авторизации
     */
    static Auth;
    /**
     * Идентификатор ссесии
     */
    static SesionId;
    /**
     * Подключается к серверу API и устанавливает соединение
     */
    async Connect() {
        Connector.SesionId = "";
        const res = await global
            .fetch(Connector.SiginUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Connector.Auth),
        })
            .then((resp) => resp.json());
        if (res && !res.error) {
            Connector.SesionId = res.data;
        }
        else {
            const erop = {
                cause: res,
            };
            throw new Error(res.error?.description, erop);
        }
    }
    /**
     * проверка актуальности текущего идентификатора ссесии на сервере API
     * @returns {Promise<boolean>} ожидание ответа сервера
     */
    async Validate() {
        try {
            const res = await global
                .fetch(Connector.ValidationUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: Connector.SesionId,
            })
                .then((resp) => resp.json());
            return res;
        }
        catch {
            return false;
        }
    }
}
exports.default = Connector;
//# sourceMappingURL=Connector.js.map