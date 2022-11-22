import ShadowSettings from "./ShadowSettings";
/**
 * Установка всех необходимых настроек
 */
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Object.defineProperty(Settings, "Auth", {
        set: function (v) {
            ShadowSettings.Auth = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Settings, "URLS", {
        set: function (v) {
            ShadowSettings.URLS = v;
        },
        enumerable: false,
        configurable: true
    });
    return Settings;
}());
export default Settings;
//# sourceMappingURL=Settings.js.map