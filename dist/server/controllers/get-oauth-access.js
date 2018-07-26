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
var ApplicationCore_1 = require("../database/src/Infrastructure/Lib/ApplicationCore");
var bcrypt = require("bcrypt");
exports.execute = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var grantType, code, redirectUri, clientId, appCore;
    return __generator(this, function (_a) {
        grantType = req.body.grant_type;
        code = req.body.code;
        redirectUri = req.body.redirect_uri;
        clientId = req.body.client_id;
        appCore = new ApplicationCore_1.ApplicationCore();
        if (!clientId || !code || !grantType) {
            res.status(404);
            res.json("Missing Required Body");
            return [2 /*return*/];
        }
        // get clientID, jwt from DB, check
        // const getUserCommand = new GetUser(null, emailAddress);
        // const getUserResponse = await appCore.dispatchQuery(getUserCommand);
        // console.log("RES", getUserResponse[0]["_password"]);
        // const match = await bcrypt.compare(password, getUserResponse[0]["_password"]);
        // if (match) {
        //   console.log('found a match');
        //   const userJwt = jwt.sign({
        //     data: emailAddress
        //   }, process.env.SECRET, { expiresIn: '1h' });
        //   console.log('your JWT is', userJwt)
        //   return res.json({msg: 'success', jwt: userJwt});
        // }
        return [2 /*return*/, res.json("Incorrect Password")];
    });
}); };
//# sourceMappingURL=get-oauth-access.js.map