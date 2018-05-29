"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid4 = require("uuid/v4");
var Uuid = /** @class */ (function () {
    function Uuid() {
    }
    Uuid.uuid4 = function () {
        return uuid4();
    };
    return Uuid;
}());
exports.Uuid = Uuid;
//# sourceMappingURL=Uuid.js.map