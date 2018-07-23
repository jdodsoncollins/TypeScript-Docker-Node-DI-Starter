"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var OAuthAccessTokenScopes = /** @class */ (function () {
    function OAuthAccessTokenScopes() {
    }
    Object.defineProperty(OAuthAccessTokenScopes.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthAccessTokenScopes.prototype, "oAuthScopeId", {
        get: function () {
            return this._oAuthScopeId;
        },
        set: function (value) {
            this._oAuthScopeId = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'varchar', nullable: false, name: 'access_token' }),
        __metadata("design:type", String)
    ], OAuthAccessTokenScopes.prototype, "_accessToken", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'oauth_scope_id' }),
        __metadata("design:type", String)
    ], OAuthAccessTokenScopes.prototype, "_oAuthScopeId", void 0);
    OAuthAccessTokenScopes = __decorate([
        typeorm_1.Entity('OAuthAccessTokenScopes', { name: 'oauth_access_token_scopes' })
    ], OAuthAccessTokenScopes);
    return OAuthAccessTokenScopes;
}());
exports.OAuthAccessTokenScopes = OAuthAccessTokenScopes;
//# sourceMappingURL=Oauth_access_token_scopes.js.map