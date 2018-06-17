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
var Uuid_1 = require("../../Infrastructure/Lib/Id/Uuid");
var Oauth = /** @class */ (function () {
    function Oauth(id) {
        if (id === void 0) { id = null; }
        this.setId(id);
    }
    Object.defineProperty(Oauth.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Oauth.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Oauth.prototype, "accessTokenExpiresOn", {
        get: function () {
            return this._accessTokenExpiresOn;
        },
        set: function (value) {
            this._accessTokenExpiresOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Oauth.prototype, "clientId", {
        get: function () {
            return this._clientId;
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Oauth.prototype, "refreshToken", {
        get: function () {
            return this._refreshToken;
        },
        set: function (value) {
            this._refreshToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Oauth.prototype, "refreshTokenExpiresOn", {
        get: function () {
            return this._refreshTokenExpiresOn;
        },
        set: function (value) {
            this._refreshTokenExpiresOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Oauth.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Oauth.prototype.setId = function (id) {
        if (id === null) {
            id = Uuid_1.Uuid.uuid4();
        }
        this._id = id;
    };
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'varchar', nullable: false, name: 'id' }),
        __metadata("design:type", Object)
    ], Oauth.prototype, "_id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'access_token' }),
        __metadata("design:type", String)
    ], Oauth.prototype, "_accessToken", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'access_token_expires_on' }),
        __metadata("design:type", String)
    ], Oauth.prototype, "_accessTokenExpiresOn", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'client_id' }),
        __metadata("design:type", String)
    ], Oauth.prototype, "_clientId", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'refresh_token' }),
        __metadata("design:type", String)
    ], Oauth.prototype, "_refreshToken", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', nullable: false, name: 'refresh_token_expires_on' }),
        __metadata("design:type", String)
    ], Oauth.prototype, "_refreshTokenExpiresOn", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'user_id' }),
        __metadata("design:type", String)
    ], Oauth.prototype, "_userId", void 0);
    Oauth = __decorate([
        typeorm_1.Entity('Oauth', { name: 'Oauth' }),
        __metadata("design:paramtypes", [String])
    ], Oauth);
    return Oauth;
}());
exports.Oauth = Oauth;
//# sourceMappingURL=Oauth.js.map