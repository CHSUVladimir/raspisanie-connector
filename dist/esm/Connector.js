import { __awaiter, __generator } from "tslib";
var Connector = /** @class */ (function () {
    function Connector() {
    }
    Connector.prototype.Connect = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, erop;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, global.fetch(Connector.SiginUrl, {
                            method: 'POST',
                            mode: 'cors',
                            body: JSON.stringify(Connector.Auth)
                        }).then(function (resp) { return resp.json(); })];
                    case 1:
                        res = _b.sent();
                        if (res && !res.error) {
                            Connector.SesionId = res.data;
                        }
                        else {
                            erop = {
                                cause: res
                            };
                            throw new Error((_a = res.error) === null || _a === void 0 ? void 0 : _a.description, erop);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Connector;
}());
export default Connector;
//# sourceMappingURL=Connector.js.map