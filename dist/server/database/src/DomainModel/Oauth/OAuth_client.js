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
var OAuthClient = /** @class */ (function () {
    function OAuthClient(id) {
        if (id === void 0) { id = null; }
        this.setIdentifier(id);
    }
    Object.defineProperty(OAuthClient.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthClient.prototype, "secret", {
        get: function () {
            return this._secret;
        },
        set: function (value) {
            this._secret = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthClient.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthClient.prototype, "redirectUrls", {
        get: function () {
            return this._redirectUrls;
        },
        set: function (value) {
            this._redirectUrls = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthClient.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        set: function (value) {
            this._createdAt = value;
        },
        enumerable: true,
        configurable: true
    });
    OAuthClient.prototype.setIdentifier = function (identifier) {
        this._identifier = identifier;
    };
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'varchar', nullable: false, name: 'identifier' }),
        __metadata("design:type", Object)
    ], OAuthClient.prototype, "_identifier", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'secret' }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "_secret", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'name' }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "_name", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'redirect_urls' }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "_redirectUrls", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'created_at', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "_createdAt", void 0);
    OAuthClient = __decorate([
        typeorm_1.Entity('OAuthClient', { name: 'oauth_client' }),
        __metadata("design:paramtypes", [String])
    ], OAuthClient);
    return OAuthClient;
}());
exports.OAuthClient = OAuthClient;
//# sourceMappingURL=OAuth_client.js.map