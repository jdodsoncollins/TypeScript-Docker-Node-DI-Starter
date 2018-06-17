"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOauthHandler_1 = require("../../ActionHandler/Oauth/GetOauthHandler");
var GetOauth = /** @class */ (function () {
    function GetOauth(_accessToken) {
        if (_accessToken === void 0) { _accessToken = null; }
        this._accessToken = _accessToken;
    }
    Object.defineProperty(GetOauth.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    GetOauth.prototype.getActionHandler = function () {
        return new GetOauthHandler_1.GetOauthHandler(this);
    };
    return GetOauth;
}());
exports.GetOauth = GetOauth;
//# sourceMappingURL=GetOauth.js.map