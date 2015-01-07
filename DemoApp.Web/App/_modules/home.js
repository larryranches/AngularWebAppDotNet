define(['ng/angular-route', 'utils/routeResolver'], function () {
    'use strict';
    var home = angular.module('app.home', ['ngRoute', 'routeResolverServices']);

    // Configure app.home module
    home.config(['$controllerProvider', '$routeProvider', 'routeResolverProvider', function ($controllerProvider, $routeProvider, routeResolverProvider) {

        // Lazy Loading mechanism              
        home.controller = $controllerProvider.register;

        // Register static routes that belong in Home module
        var rpRoute = routeResolverProvider.route;
        $routeProvider
            .when('/', rpRoute.resolve('App/Home/Partials/', 'App/Home/Ctrl/', 'home', '/')) // Default route
            .when('/home', rpRoute.resolve('App/Home/Partials/', 'App/Home/Ctrl/', 'home', '/'))
            .when('/error', rpRoute.resolve('App/Home/Partials/', 'App/Home/Ctrl/', 'error', '/'))
            .otherwise({ redirectTo: '/error' });


        /* Routes can be created dynamically with JSON from a back-end database. Example below.
                // Dynamically load routes via JSON data                
                var homeRouteData = [
                    {
                        routeName: '/',  //default route
                        baseName: 'home',
                        path: '/',
                        viewDir: 'App/Home/Partials/',
                        ctrlDir: 'App/Home/Ctrl/'
                    },          
                ];

                // Iterate through routing data to create routes
                homeRoutingData.forEach(function (route) {
                    $routeProvider
                        .when(route.routeName, rpRoute.resolve(route.viewDir, route.ctrlDir, route.baseName, route.path))
                        .otherwise({ redirectTo: '/error' });  
                });
        */

    }]);

    return home;
});