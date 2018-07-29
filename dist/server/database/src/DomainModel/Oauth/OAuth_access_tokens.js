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
var OAuthAccessTokens = /** @class */ (function () {
    function OAuthAccessTokens(id) {
        if (id === void 0) { id = null; }
    }
    Object.defineProperty(OAuthAccessTokens.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (identifier) {
            this._identifier = identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthAccessTokens.prototype, "oAuthClientId", {
        get: function () {
            return this._oAuthClientId;
        },
        set: function (value) {
            this._oAuthClientId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthAccessTokens.prototype, "expiresAt", {
        get: function () {
            return this._expiresAt;
        },
        set: function (value) {
            this._expiresAt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthAccessTokens.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        set: function (value) {
            this._createdAt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthAccessTokens.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthAccessTokens.prototype, "isRevoken", {
        get: function () {
            return this._isRevoked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthAccessTokens.prototype, "isRevoked", {
        set: function (value) {
            this._isRevoked = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'varchar', nullable: false, name: 'identifier' }),
        __metadata("design:type", Object)
    ], OAuthAccessTokens.prototype, "_identifier", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'oauth_client_id' }),
        __metadata("design:type", String)
    ], OAuthAccessTokens.prototype, "_oAuthClientId", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', nullable: false, name: 'expires_at', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", String)
    ], OAuthAccessTokens.prototype, "_expiresAt", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', nullable: false, name: 'created_at', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", String)
    ], OAuthAccessTokens.prototype, "_createdAt", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'user_id' }),
        __metadata("design:type", String)
    ], OAuthAccessTokens.prototype, "_userId", void 0);
    __decorate([
        typeorm_1.Column({ type: 'tinyint', nullable: false, name: 'is_revoked' }),
        __metadata("design:type", String)
    ], OAuthAccessTokens.prototype, "_isRevoked", void 0);
    OAuthAccessTokens = __decorate([
        typeorm_1.Entity('OAuthAccessTokens', { name: 'oauth_access_tokens' }),
        __metadata("design:paramtypes", [String])
    ], OAuthAccessTokens);
    return OAuthAccessTokens;
}());
exports.OAuthAccessTokens = OAuthAccessTokens;
//# sourceMappingURL=OAuth_access_tokens.js.map