"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ShadowSettings_1 = tslib_1.__importDefault(require("./ShadowSettings"));
/**
 * Установка всех необходимых настроек
 */
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Object.defineProperty(Settings, "Auth", {
        set: function (v) {
            ShadowSettings_1.default.Auth = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Settings, "URLS", {
        set: function (v) {
            ShadowSettings_1.default.URLS = v;
        },
        enumerable: false,
        configurable: true
    });
    return Settings;
}());
exports.default = Settings;
//# sourceMappingURL=Settings.js.map