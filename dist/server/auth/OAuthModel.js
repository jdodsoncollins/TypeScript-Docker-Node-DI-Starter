"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationCore_1 = require("../database/src/Infrastructure/Lib/ApplicationCore");
var bcrypt = require("bcrypt");
var _ = require('lodash');
var OAuthModel = /** @class */ (function () {
    function OAuthModel() {
        this.appCore = new ApplicationCore_1.ApplicationCore();
    }
    return OAuthModel;
}());
exports.OAuthModel = OAuthModel;
//# sourceMappingURL=OAuthModel.js.map