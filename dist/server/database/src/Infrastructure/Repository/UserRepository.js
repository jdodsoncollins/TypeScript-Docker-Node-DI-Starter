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
var typeorm_1 = require("typeorm");
var User_1 = require("../../DomainModel/User/User");
require("reflect-metadata");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var UserRepository = /** @class */ (function () {
    function UserRepository(connection, entityManager) {
        this.connection = connection;
        this.entityManager = entityManager;
        this._connection = connection;
        this._entityManager = entityManager;
    }
    UserRepository.prototype.createUser = function (user) {
        return this._connection.manager.save(user);
    };
    UserRepository.prototype.getById = function (id) {
        var idArray = [];
        if (id instanceof Array) {
            idArray = id;
        }
        else {
            idArray.push(id);
        }
        return this._connection.getRepository(User_1.User).findByIds(idArray);
    };
    UserRepository.prototype.getByEmail = function (email) {
        return this._connection.getRepository(User_1.User).find({ email: email });
    };
    UserRepository = __decorate([
        typedi_1.Service(),
        __param(0, typeorm_typedi_extensions_1.InjectConnection()),
        __param(1, typeorm_typedi_extensions_1.InjectManager()),
        __metadata("design:paramtypes", [typeorm_1.Connection,
            typeorm_1.EntityManager])
    ], UserRepository);
    return UserRepository;
}());
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map