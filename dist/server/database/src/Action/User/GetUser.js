"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetUserHandler_1 = require("../../ActionHandler/User/GetUserHandler");
var GetUser = /** @class */ (function () {
    function GetUser(_userId, _email) {
        if (_userId === void 0) { _userId = null; }
        if (_email === void 0) { _email = null; }
        this._userId = _userId;
        this._email = _email;
    }
    Object.defineProperty(GetUser.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetUser.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    GetUser.prototype.getActionHandler = function () {
        return new GetUserHandler_1.GetUserHandler(this);
    };
    return GetUser;
}());
exports.GetUser = GetUser;
//# sourceMappingURL=GetUser.js.map