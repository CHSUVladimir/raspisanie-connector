import Connector from "../Connector";
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
            Connector.SiginUrl = v.main + v.Signin;
            Connector.ValidationUrl = v.main + v.Validation;
            this.urls = v;
        },
        enumerable: false,
        configurable: true
    });
    return ShadowSettings;
}());
export default ShadowSettings;
//# sourceMappingURL=ShadowSettings.js.map