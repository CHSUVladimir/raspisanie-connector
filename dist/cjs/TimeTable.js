"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Connector_1 = tslib_1.__importDefault(require("./Connector"));
class TimeTable {
    /**
     * Набор расписания
     */
    static timeTable;
    /**
     * @readonly
     * @property {ITimeTable[]} Набор информации по расписанию
     */
    static get TimeTable() {
        return this.timeTable;
    }
    /**
     * Адрес получения данных расписания
     */
    static URL;
    /**
     * Загружает данные расписания для указанных дат
     * @param {Date} ds Дата начала промежутка
     * @param {Date} de Дата окончания промежутка
     */
    static async Load(ds, de) {
        try {
            const rurl = this.URL.replace("{startDt}", this.DateToUrlString(ds)).replace("{endDt}", this.DateToUrlString(de));
            const res = await fetch(rurl, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + Connector_1.default.SesionId,
                },
                method: "GET",
                mode: "cors",
            }).then((resp) => resp.json());
            if (res && !res.code) {
                this.timeTable = res;
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
    /**
     * Преобразовывает дату в строку для запроса данных
     * @param {Date} d Дата для преобразования
     * @returns {string} преобразованная в строку формата дд.ММ.гггг дата
     */
    static DateToUrlString(d) {
        const diso = d.toISOString().split("T")[0].split("-");
        return `${diso[2]}.${diso[1]}.${diso[0]}`;
    }
    /**
     * Фильтрует по заданым условиям для аудиторий и оставляет данные только для аудиторий
     * @param {number|number[]} aid условия для аудиторий (идентификаторы)
     */
    static FilterByAuditory(aid) {
        const ar = aid;
        if (ar.length) {
            this.timeTable = this.timeTable.filter((m) => ar.indexOf(m.auditory.id) > -1);
        }
        else {
            const id = aid;
            this.timeTable = this.timeTable.filter((m) => m.auditory.id === id);
        }
    }
}
exports.default = TimeTable;
//# sourceMappingURL=TimeTable.js.map