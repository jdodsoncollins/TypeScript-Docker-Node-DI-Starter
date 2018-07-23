"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var User_1 = require("./database/src/DomainModel/User/User");
var OAuth_access_tokens_1 = require("./database/src/DomainModel/Oauth/OAuth_access_tokens");
var Oauth_access_token_scopes_1 = require("./database/src/DomainModel/Oauth/Oauth_access_token_scopes");
var OAuth_client_1 = require("./database/src/DomainModel/Oauth/OAuth_client");
var OAuth_refresh_tokens_1 = require("./database/src/DomainModel/Oauth/OAuth_refresh_tokens");
var OAuth_scopes_1 = require("./database/src/DomainModel/Oauth/OAuth_scopes");
var projectRoot = path_1.resolve(__dirname, '../');
var MysqlConnection = /** @class */ (function () {
    function MysqlConnection() {
        this.name = 'default';
        this.type = 'mysql';
        this.host = '127.0.0.1';
        this.port = 33066;
        this.username = 'root';
        this.password = 'root';
        this.database = 'test';
        this.synchronize = true;
        this.logging = true;
        // readonly debug = true;
        this.entities = [
            User_1.User,
            Oauth_access_token_scopes_1.OAuthAccessTokenScopes,
            OAuth_access_tokens_1.OAuthAccessTokens,
            OAuth_client_1.OAuthClient,
            OAuth_refresh_tokens_1.OAuthRefreshTokens,
            OAuth_scopes_1.OAuthScopes
        ];
        this.migrations = [
            projectRoot + '/migration/**/*.ts'
        ];
    }
    MysqlConnection.connect = function () {
        console.log('MAKING CONNECTION');
        return new this();
    };
    return MysqlConnection;
}());
exports.MysqlConnection = MysqlConnection;
//# sourceMappingURL=ormconfig.js.map