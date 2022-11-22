"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Connector_1 = tslib_1.__importDefault(require("../Connector"));
var ShadowSettings = /** @class */ (function () {
    function ShadowSettings() {
    }
    Object.defineProperty(ShadowSettings, "Auth", {
        get: function () {
            return this.auth;
        },
        set: function (v) {
            this.auth = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShadowSettings, "URLS", {
        get: function () {
            return this.urls;
        },
        set: function (v) {
            Connector_1.default.SiginUrl = v.main + v.Signin;
            Connector_1.default.ValidationUrl = v.main + v.Validation;
            this.urls = v;
        },
        enumerable: false,
        configurable: true
    });
    return ShadowSettings;
}());
exports.default = ShadowSettings;
//# sourceMappingURL=ShadowSettings.js.map