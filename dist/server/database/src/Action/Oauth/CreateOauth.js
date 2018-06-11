"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Oauth_1 = require("../../DomainModel/Oauth/Oauth");
var CreateOauthHandler_1 = require("../../ActionHandler/Oauth/CreateOauthHandler");
var CreateOauth = /** @class */ (function () {
    function CreateOauth(_firstName, _lastName, _email, _password) {
        if (_email === void 0) { _email = null; }
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._password = _password;
        this._oauth = new Oauth_1.Oauth();
        // if (_firstName) {
        //   this.setFirstName(_firstName);
        // }
        // if (_lastName) {
        //   this.setLastName(_lastName);
        // }
        // if (_email) {
        //   this.setEmail(_email);
        // }
        // if (_password) {
        //   this.setPassword(_password);
        // }
    }
    Object.defineProperty(CreateOauth.prototype, "oauth", {
        get: function () {
            return this._oauth;
        },
        enumerable: true,
        configurable: true
    });
    // private setFirstName(firstName: string) {
    //     this._oauth.firstName = firstName;
    // }
    // private setLastName(lastName: string) {
    //     this._oauth.lastName = lastName;
    // }
    // private setEmail(email: string) {
    //   this._oauth.email = email;
    // }
    // private setPassword(password: string) {
    //   this._oauth.password = password;
    // }
    CreateOauth.prototype.getActionHandler = function () {
        return new CreateOauthHandler_1.CreateOauthHandler(this);
    };
    return CreateOauth;
}());
exports.CreateOauth = CreateOauth;
//# sourceMappingURL=CreateOauth.js.map