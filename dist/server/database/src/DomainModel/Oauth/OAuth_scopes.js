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
var OAuthScopes = /** @class */ (function () {
    function OAuthScopes(id) {
        if (id === void 0) { id = null; }
        this.setId(id);
    }
    Object.defineProperty(OAuthScopes.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthScopes.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthScopes.prototype, "isDefault", {
        get: function () {
            return this._isDefault;
        },
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: true,
        configurable: true
    });
    OAuthScopes.prototype.setId = function (id) {
        if (id === null) {
            id = Uuid_1.Uuid.uuid4();
        }
        this._id = id;
    };
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'varchar', nullable: false, name: 'id' }),
        __metadata("design:type", Object)
    ], OAuthScopes.prototype, "_id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'scope' }),
        __metadata("design:type", String)
    ], OAuthScopes.prototype, "_scope", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: false, name: 'is_default' }),
        __metadata("design:type", Boolean)
    ], OAuthScopes.prototype, "_isDefault", void 0);
    OAuthScopes = __decorate([
        typeorm_1.Entity('OAuthScopes', { name: 'oauth_scopes' }),
        __metadata("design:paramtypes", [String])
    ], OAuthScopes);
    return OAuthScopes;
}());
exports.OAuthScopes = OAuthScopes;
//# sourceMappingURL=OAuth_scopes.js.map