import { __awaiter, __generator } from "tslib";
var Store = /** @class */ (function () {
    function Store() {
        /** Данные содержимого */
        this.Buffer = [];
        /** Произведена первичная загрузка */
        this.FirstLoadStarted = false;
        /**
         * Подписанные на обновление
         */
        this._subscribedUpdate = {};
        /**
         * время в милисекундах между обновлениями
         */
        this.UpdateInterval = 300000;
    }
    /**
     * Первичная загрузка
     */
    Store.prototype.FirstLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Load()];
                    case 1:
                        res = _a.sent();
                        this.FirstLoadStarted = true;
                        this.UpdateTimer = setInterval(function () { _this.Load(); }, this.UpdateInterval);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * Принудительная перезагрузка
     */
    Store.prototype.ForceReload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.UpdateTimer) return [3 /*break*/, 2];
                        clearInterval(this.UpdateTimer);
                        return [4 /*yield*/, this.FirstLoad()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.FirstLoad()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Подписка на обновление
     * @param {string} name наименование подписки (должно быть уникальным)
     * @param {()=>any} method метод исполняемый при обновлении
     */
    Store.prototype.SubscribeToUpdate = function (name, method) {
        this._subscribedUpdate[name] = method;
    };
    /**
     * Отписка от обновления
     * @param {string} name наименование подписки (должно быть уникальным)
     */
    Store.prototype.UnSubscribeToUpdate = function (name) {
        if (this._subscribedUpdate[name]) {
            delete this._subscribedUpdate[name];
        }
    };
    /**
     * Проверяет отсутствие названия подписки во всех подписках
     * @param {string} name Наименование подписки для проверки
     * @returns {boolean} Отсутствие подписки с таким именем
     */
    Store.prototype.NameIsUniqeSubUpd = function (name) {
        if (this._subscribedUpdate[name]) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Действие при обновлении
     */
    Store.prototype.Updated = function () {
        for (var h in this._subscribedUpdate) {
            this._subscribedUpdate[h]();
        }
    };
    Store.prototype.Load = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return Store;
}());
export default Store;
//# sourceMappingURL=Store.js.map