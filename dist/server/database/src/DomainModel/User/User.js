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
var User = /** @class */ (function () {
    function User(id) {
        if (id === void 0) { id = null; }
        this.setId(id);
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.setId = function (id) {
        if (id === null) {
            id = Uuid_1.Uuid.uuid4();
        }
        this._id = id;
    };
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'varchar', nullable: false, name: 'id' }),
        __metadata("design:type", Object)
    ], User.prototype, "_id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: true, name: 'email' }),
        __metadata("design:type", String)
    ], User.prototype, "_email", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: true, name: 'firstName' }),
        __metadata("design:type", String)
    ], User.prototype, "_firstName", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: true, name: 'lastName' }),
        __metadata("design:type", String)
    ], User.prototype, "_lastName", void 0);
    User = __decorate([
        typeorm_1.Entity('user', { name: 'user' }),
        __metadata("design:paramtypes", [String])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map