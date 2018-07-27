"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOAuthClientHandler_1 = require("../../ActionHandler/Oauth/GetOAuthClientHandler");
var GetOAuthClient = /** @class */ (function () {
    function GetOAuthClient(_identifier, _secret) {
        if (_identifier === void 0) { _identifier = null; }
        if (_secret === void 0) { _secret = null; }
        this._identifier = _identifier;
        this._secret = _secret;
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
    GetOAuthClient.prototype.getActionHandler = function () {
        return new GetOAuthClientHandler_1.GetOAuthClientHandler(this);
    };
    return GetOAuthClient;
}());
exports.GetOAuthClient = GetOAuthClient;
//# sourceMappingURL=GetOAuthClient.js.map