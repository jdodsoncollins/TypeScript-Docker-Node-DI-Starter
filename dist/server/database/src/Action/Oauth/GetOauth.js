"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOauthHandler_1 = require("../../ActionHandler/Oauth/GetOauthHandler");
var GetOauth = /** @class */ (function () {
    function GetOauth(_userId, _email) {
        if (_userId === void 0) { _userId = null; }
        if (_email === void 0) { _email = null; }
        this._userId = _userId;
        this._email = _email;
    }
    // get userId(): string {
    //   return this._userId;
    // }
    // get email(): string {
    //     return this._email;
    // }
    GetOauth.prototype.getActionHandler = function () {
        return new GetOauthHandler_1.GetOauthHandler(this);
    };
    return GetOauth;
}());
exports.GetOauth = GetOauth;
//# sourceMappingURL=GetOauth.js.map