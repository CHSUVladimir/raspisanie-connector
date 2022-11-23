"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Connector_1 = tslib_1.__importDefault(require("./Connector"));
class Buildings {
    /**
     * Набор информации по зданиям
     */
    static buldings = [];
    /**
     * @readonly
     * @property {IBuildingResponse[]} Набор информации по зданиям
     */
    static get Buildings() {
        return this.buldings;
    }
    /**
     * Адрес получения данных о зданиях
     */
    static URL;
    /**
     * Процесс загрузки данных о зданиях
     */
    static async Load() {
        try {
            const res = await fetch(Buildings.URL, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Connector_1.default.SesionId,
                },
                method: "GET",
                mode: "cors",
            }).then((resp) => resp.json());
            if (res && !res.code) {
                Buildings.buldings = res;
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
exports.default = Buildings;
//# sourceMappingURL=Buildings.js.map