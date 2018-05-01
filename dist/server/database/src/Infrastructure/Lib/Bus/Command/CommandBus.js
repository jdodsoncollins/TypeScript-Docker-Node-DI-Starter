"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandBus = /** @class */ (function () {
    function CommandBus() {
    }
    CommandBus.prototype.execute = function (command) {
        var handler = command.getActionHandler();
        return handler.execute();
    };
    return CommandBus;
}());
exports.CommandBus = CommandBus;
//# sourceMappingURL=CommandBus.js.map