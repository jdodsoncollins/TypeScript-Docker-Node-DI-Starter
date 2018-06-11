"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var GetUser_1 = require("../database/src/Action/User/GetUser");
var ApplicationCore_1 = require("../database/src/Infrastructure/Lib/ApplicationCore");
var OAuthModel_1 = require("../auth/OAuthModel");
var bcrypt = require("bcrypt");
var oAuthServer = require("oauth2-server");
var oAuthModel = new OAuthModel_1.OAuthModel();
var Request = oAuthServer.Request;
var Response = oAuthServer.Response;
var oAuth = new oAuthServer({
    model: oAuthModel
});
exports.execute = function (req, response) { return __awaiter(_this, void 0, void 0, function () {
    var emailAddress, password, appCore, getUserCommand, getUserResponse, match, request;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                emailAddress = req.body.user;
                password = req.body.password;
                console.log(emailAddress, password);
                appCore = new ApplicationCore_1.ApplicationCore();
                if (!emailAddress || !password) {
                    response.status(404);
                    response.json("Missing Email or Password");
                    return [2 /*return*/];
                }
                getUserCommand = new GetUser_1.GetUser(null, emailAddress);
                return [4 /*yield*/, appCore.dispatchQuery(getUserCommand)];
            case 1:
                getUserResponse = _a.sent();
                console.log("RES", getUserResponse[0]["_password"]);
                return [4 /*yield*/, bcrypt.compare(password, getUserResponse[0]["_password"])];
            case 2:
                match = _a.sent();
                if (match) {
                    console.log(match);
                    request = new Request(req);
                    response = new Response(response);
                    return [2 /*return*/, oAuth
                            .authorize(request, response)
                            .then(function (success) {
                            response.json(success);
                            console.log(response.json(success));
                        })
                            .catch(function (err) {
                            response.status(err.code || 500).json(err);
                            console.log(response.status(err.code || 500).json(err));
                        })];
                    // return response.json(getUserResponse);
                }
                return [2 /*return*/, response.json("Incorrect Password")];
        }
    });
}); var response; };
//# sourceMappingURL=check-user.js.map