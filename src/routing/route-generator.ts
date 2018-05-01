import { RouteDefinitions } from './route-definitions.constant';

export class RouteGenerator implements RouteGeneratorInterface {
    public url(routeName: string, routeParams: any = null): string {
        if (!this.hasRouteName(routeName)) {
            throw RouteNotFoundException.invalidRoute(routeName);
        }

        let route: string = RouteDefinitions[routeName];
        let routeParameters: string = null;

        if (routeParams) {
            Object.keys(routeParams).map(
                (key: string) => {
                    if (this.hasRouteParam(route, key)) {
                        route = route.replace(':' + key, routeParams[key]);
                    } else {
                        routeParameters = this.appendOptionalParameter(key, routeParams[key], routeParameters);
                    }
                }
            );
        }

        if (route.charAt(0) !== '/') {
            route = '/' + route;
        }

        if (routeParameters === null) {
            return route;
        } else {
            return route + '?' + routeParameters;
        }
    }

    private appendOptionalParameter(key: string, value: string, existingRouteParams = null) {
        if (this.isFirstAddedGetParameter(existingRouteParams)) {
            return key + '=' + value;
        }

        return existingRouteParams += '&' + key + '=' + value;
    }

    private isFirstAddedGetParameter(existingRouteParams: any): boolean {
        return existingRouteParams === null;
    }

    private hasRouteName(routeName: string): boolean {
        return routeName in RouteDefinitions;
    }

    private hasRouteParam(route: string, key: string): boolean {
        return route.includes(':' + key) === true;
    }
}

export interface RouteGeneratorInterface {
    url(routeName: string, routeParams?: any): string;
}

export class RouteNotFoundException extends Error {
    static invalidRoute(routeName: string) {
        return new RouteNotFoundException('Invalid Route: (' + routeName + ')');
    }
}
