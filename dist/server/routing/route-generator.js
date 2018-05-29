"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var route_definitions_constant_1 = require("./route-definitions.constant");
var RouteGenerator = /** @class */ (function () {
    function RouteGenerator() {
    }
    RouteGenerator.prototype.url = function (routeName, routeParams) {
        var _this = this;
        if (routeParams === void 0) { routeParams = null; }
        if (!this.hasRouteName(routeName)) {
            throw RouteNotFoundException.invalidRoute(routeName);
        }
        var route = route_definitions_constant_1.RouteDefinitions[routeName];
        var routeParameters = null;
        if (routeParams) {
            Object.keys(routeParams).map(function (key) {
                if (_this.hasRouteParam(route, key)) {
                    route = route.replace(':' + key, routeParams[key]);
                }
                else {
                    routeParameters = _this.appendOptionalParameter(key, routeParams[key], routeParameters);
                }
            });
        }
        if (route.charAt(0) !== '/') {
            route = '/' + route;
        }
        if (routeParameters === null) {
            return route;
        }
        else {
            return route + '?' + routeParameters;
        }
    };
    RouteGenerator.prototype.appendOptionalParameter = function (key, value, existingRouteParams) {
        if (existingRouteParams === void 0) { existingRouteParams = null; }
        if (this.isFirstAddedGetParameter(existingRouteParams)) {
            return key + '=' + value;
        }
        return existingRouteParams += '&' + key + '=' + value;
    };
    RouteGenerator.prototype.isFirstAddedGetParameter = function (existingRouteParams) {
        return existingRouteParams === null;
    };
    RouteGenerator.prototype.hasRouteName = function (routeName) {
        return routeName in route_definitions_constant_1.RouteDefinitions;
    };
    RouteGenerator.prototype.hasRouteParam = function (route, key) {
        return route.includes(':' + key) === true;
    };
    return RouteGenerator;
}());
exports.RouteGenerator = RouteGenerator;
var RouteNotFoundException = /** @class */ (function (_super) {
    __extends(RouteNotFoundException, _super);
    function RouteNotFoundException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteNotFoundException.invalidRoute = function (routeName) {
        return new RouteNotFoundException('Invalid Route: (' + routeName + ')');
    };
    return RouteNotFoundException;
}(Error));
exports.RouteNotFoundException = RouteNotFoundException;
//# sourceMappingURL=route-generator.js.map