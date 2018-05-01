"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUserHandler_1 = require("../../ActionHandler/User/CreateUserHandler");
var User_1 = require("../../DomainModel/User/User");
var CreateUser = /** @class */ (function () {
    function CreateUser(_firstName, _lastName, _email) {
        if (_email === void 0) { _email = null; }
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._user = new User_1.User();
        if (_firstName) {
            this.setFirstName(_firstName);
        }
        if (_lastName) {
            this.setLastName(_lastName);
        }
        if (_email) {
            this.setEmail(_email);
        }
    }
    Object.defineProperty(CreateUser.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    CreateUser.prototype.setFirstName = function (firstName) {
        this._user.firstName = firstName;
    };
    CreateUser.prototype.setLastName = function (lastName) {
        this._user.lastName = lastName;
    };
    CreateUser.prototype.setEmail = function (email) {
        this._user.email = email;
    };
    CreateUser.prototype.getActionHandler = function () {
        return new CreateUserHandler_1.CreateUserHandler(this);
    };
    return CreateUser;
}());
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUser.js.map