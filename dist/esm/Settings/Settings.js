"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Auditorium_1 = tslib_1.__importDefault(require("../Auditorium"));
const Buildings_1 = tslib_1.__importDefault(require("../Buildings"));
const Connector_1 = tslib_1.__importDefault(require("../Connector"));
const TimeTable_1 = tslib_1.__importDefault(require("../TimeTable"));
/**
 * Установка всех необходимых настроек
 */
class Settings {
    static set Auth(v) {
        Connector_1.default.Auth = v;
    }
    static set URLS(v) {
        Connector_1.default.SiginUrl = v.main + v.Signin;
        Connector_1.default.ValidationUrl = v.main + v.Validation;
        Buildings_1.default.URL = v.main + v.Building;
        Auditorium_1.default.URL = v.main + v.Auditorium;
        TimeTable_1.default.URL = v.main + v.TimeTable;
    }
}
exports.default = Settings;
//# sourceMappingURL=Settings.js.map