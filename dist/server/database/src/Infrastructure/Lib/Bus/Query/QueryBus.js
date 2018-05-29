"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryBus = /** @class */ (function () {
    function QueryBus() {
    }
    QueryBus.prototype.execute = function (query) {
        var handler = query.getActionHandler();
        return handler.execute();
    };
    return QueryBus;
}());
exports.QueryBus = QueryBus;
//# sourceMappingURL=QueryBus.js.map