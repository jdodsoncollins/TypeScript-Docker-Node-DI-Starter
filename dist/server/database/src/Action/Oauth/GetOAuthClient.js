"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOAuthClientHandler_1 = require("../../ActionHandler/Oauth/GetOAuthClientHandler");
var GetOAuthClient = /** @class */ (function () {
    function GetOAuthClient(_identifier, _secret, _redirectUri) {
        if (_identifier === void 0) { _identifier = null; }
        if (_secret === void 0) { _secret = null; }
        if (_redirectUri === void 0) { _redirectUri = null; }
        this._identifier = _identifier;
        this._secret = _secret;
        this._redirectUri = _redirectUri;
    }
    Object.defineProperty(GetOAuthClient.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetOAuthClient.prototype, "secret", {
        get: function () {
            return this._secret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetOAuthClient.prototype, "redirectUri", {
        get: function () {
            return this._redirectUri;
        },
        enumerable: true,
        configurable: true
    });
    GetOAuthClient.prototype.getActionHandler = function () {
        return new GetOAuthClientHandler_1.GetOAuthClientHandler(this);
    };
    return GetOAuthClient;
}());
exports.GetOAuthClient = GetOAuthClient;
//# sourceMappingURL=GetOAuthClient.js.map