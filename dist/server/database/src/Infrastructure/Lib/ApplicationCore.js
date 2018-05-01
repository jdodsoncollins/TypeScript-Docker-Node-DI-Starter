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
require("reflect-metadata");
var CommandBus_1 = require("./Bus/Command/CommandBus");
var QueryBus_1 = require("./Bus/Query/QueryBus");
require("reflect-metadata");
require("reflect-metadata");
var typedi_1 = require("typedi");
var typeorm_1 = require("typeorm");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var ApplicationCore = /** @class */ (function () {
    function ApplicationCore() {
        console.log('App Core constructed');
    }
    ApplicationCore.prototype.dispatchCommand = function (command) {
        return this.commandBus.execute(command);
    };
    ApplicationCore.prototype.dispatchQuery = function (query) {
        return this.queryBus.execute(query);
    };
    Object.defineProperty(ApplicationCore.prototype, "commandBus", {
        get: function () {
            return new CommandBus_1.CommandBus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationCore.prototype, "queryBus", {
        get: function () {
            return new QueryBus_1.QueryBus();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        typeorm_typedi_extensions_1.InjectConnection(),
        __metadata("design:type", typeorm_1.Connection)
    ], ApplicationCore.prototype, "connection", void 0);
    ApplicationCore = __decorate([
        typedi_1.Service(),
        __metadata("design:paramtypes", [])
    ], ApplicationCore);
    return ApplicationCore;
}());
exports.ApplicationCore = ApplicationCore;
//# sourceMappingURL=ApplicationCore.js.map