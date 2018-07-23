"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOauthAccessTokenHandler_1 = require("../../ActionHandler/Oauth/GetOauthAccessTokenHandler");
var GetOauthAccessToken = /** @class */ (function () {
    function GetOauthAccessToken(_accessToken, _userId) {
        if (_accessToken === void 0) { _accessToken = null; }
        if (_userId === void 0) { _userId = null; }
        this._accessToken = _accessToken;
        this._userId = _userId;
    }
    Object.defineProperty(GetOauthAccessToken.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetOauthAccessToken.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    GetOauthAccessToken.prototype.getActionHandler = function () {
        return new GetOauthAccessTokenHandler_1.GetOauthAccessTokenHandler(this);
    };
    return GetOauthAccessToken;
}());
exports.GetOauthAccessToken = GetOauthAccessToken;
//# sourceMappingURL=GetOauthAccessToken.js.map