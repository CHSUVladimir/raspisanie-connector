"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Connector_1 = tslib_1.__importDefault(require("./Connector"));
class Auditorium {
    /**
     * Набор информации по аудиториям
     */
    static auditories = [];
    /**
     * @readonly
     * @property {IAuditory[]} Набор информации по аудиториям
     */
    static get Auditories() {
        return this.auditories;
    }
    /**
     * Адрес получения данных об аудиториях
     */
    static URL;
    /**
     * Производит асинхронную загрузку данных
     */
    static async Load() {
        try {
            const res = await fetch(Auditorium.URL, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Connector_1.default.SesionId,
                },
                method: "GET",
                mode: "cors",
            }).then((resp) => resp.json());
            if (res && !res.code) {
                this.auditories = res;
            }
            else {
                if (res.code) {
                    throw new Error("Unauthorized (Token is not valid)", { cause: res });
                }
                else {
                    throw new Error("Unauthorized");
                }
            }
        }
        catch (er) {
            const err = er;
            if (err.message.includes("Unauthorized")) {
                throw er;
            }
            else {
                throw new Error("Unauthorized or connection lost!", { cause: er });
            }
        }
    }
}
exports.default = Auditorium;
//# sourceMappingURL=Auditorium.js.map