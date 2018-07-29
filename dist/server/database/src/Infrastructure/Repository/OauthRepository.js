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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var OAuth_access_tokens_1 = require("../../DomainModel/Oauth/OAuth_access_tokens");
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var OAuth_client_1 = require("../../DomainModel/Oauth/OAuth_client");
var OauthRepository = /** @class */ (function () {
    function OauthRepository(connection, entityManager) {
        this.connection = connection;
        this.entityManager = entityManager;
        this._connection = connection;
        this._entityManager = entityManager;
    }
    OauthRepository.prototype.createOauthAccessToken = function (oAuthAccessToken) {
        return this._connection.manager.save(oAuthAccessToken);
    };
    OauthRepository.prototype.getAccessTokenById = function (id) {
        var idArray = [];
        if (id instanceof Array) {
            idArray = id;
        }
        else {
            idArray.push(id);
        }
        return this._connection.getRepository(OAuth_access_tokens_1.OAuthAccessTokens).findByIds(idArray);
    };
    OauthRepository.prototype.getAccessTokenByUserId = function (userId) {
        return this._connection.getRepository(OAuth_access_tokens_1.OAuthAccessTokens)
            .createQueryBuilder('OAuthAccessTokens')
            .where('OAuthAccessTokens.user_id = :userId', { userId: userId })
            .getOne();
    };
    OauthRepository.prototype.getClientByRedirectUri = function (redirectUri) {
        return this._connection.getRepository(OAuth_client_1.OAuthClient)
            .createQueryBuilder('OAuthClient')
            .where('OAuthClient.redirect_uri = :redirectUri', { redirectUri: redirectUri })
            .getOne();
    };
    OauthRepository.prototype.getClientByIdentifier = function (identifier) {
        return this._connection.getRepository(OAuth_client_1.OAuthClient)
            .createQueryBuilder('OAuthClient')
            .where('OAuthClient.identifier = :identifier', { identifier: identifier })
            .getOne();
    };
    OauthRepository = __decorate([
        typedi_1.Service(),
        __param(0, typeorm_typedi_extensions_1.InjectConnection()),
        __param(1, typeorm_typedi_extensions_1.InjectManager()),
        __metadata("design:paramtypes", [typeorm_1.Connection,
            typeorm_1.EntityManager])
    ], OauthRepository);
    return OauthRepository;
}());
exports.OauthRepository = OauthRepository;
//# sourceMappingURL=OauthRepository.js.map