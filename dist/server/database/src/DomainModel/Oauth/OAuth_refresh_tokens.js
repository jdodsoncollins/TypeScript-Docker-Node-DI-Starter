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
var OAuthRefreshTokens = /** @class */ (function () {
    function OAuthRefreshTokens(id) {
        if (id === void 0) { id = null; }
        this.setIdentifier(id);
    }
    Object.defineProperty(OAuthRefreshTokens.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthRefreshTokens.prototype, "oAuthAccessTokenId", {
        get: function () {
            return this._oAuthAccessTokenId;
        },
        set: function (value) {
            this._oAuthAccessTokenId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthRefreshTokens.prototype, "accessTokenExpiresOn", {
        get: function () {
            return this._accessTokenExpiresOn;
        },
        set: function (value) {
            this._accessTokenExpiresOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthRefreshTokens.prototype, "expiresAt", {
        get: function () {
            return this._expiresAt;
        },
        set: function (value) {
            this._expiresAt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthRefreshTokens.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        set: function (value) {
            this._createdAt = value;
        },
        enumerable: true,
        configurable: true
    });
    OAuthRefreshTokens.prototype.setIdentifier = function (identifier) {
        this._identifier = identifier;
    };
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'varchar', nullable: false, name: 'identifier' }),
        __metadata("design:type", Object)
    ], OAuthRefreshTokens.prototype, "_identifier", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'oauth_access_token_id' }),
        __metadata("design:type", String)
    ], OAuthRefreshTokens.prototype, "_oAuthAccessTokenId", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'access_token_expires_on', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", String)
    ], OAuthRefreshTokens.prototype, "_accessTokenExpiresOn", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', nullable: false, name: 'expires_at', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", String)
    ], OAuthRefreshTokens.prototype, "_expiresAt", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', nullable: false, name: 'created_at', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", String)
    ], OAuthRefreshTokens.prototype, "_createdAt", void 0);
    OAuthRefreshTokens = __decorate([
        typeorm_1.Entity('OAuthRefreshTokens', { name: 'oauth_refresh_tokens' }),
        __metadata("design:paramtypes", [String])
    ], OAuthRefreshTokens);
    return OAuthRefreshTokens;
}());
exports.OAuthRefreshTokens = OAuthRefreshTokens;
//# sourceMappingURL=OAuth_refresh_tokens.js.map