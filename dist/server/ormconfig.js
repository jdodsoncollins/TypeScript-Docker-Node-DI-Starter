"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var User_1 = require("./database/src/DomainModel/User/User");
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
            User_1.User
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