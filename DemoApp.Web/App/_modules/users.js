define(['ng/angular-route', 'utils/routeResolver'], function () {
    'use strict';
    var usersModule = angular.module('app.users', ['ngRoute', 'routeResolverServices', 'ngGrid', 'restangular', 'ngResource']);

    // Configure app.users module
    usersModule.config(['$controllerProvider', '$routeProvider', '$provide', 'routeResolverProvider',
        function ($controllerProvider, $routeProvider, $provide, routeResolverProvider) {

            // Lazy Loading mechanism          
            usersModule.controller = $controllerProvider.register;
            usersModule.factory = $provide.factory;


            // Register static routes that belong in Users module
            var rpRoute = routeResolverProvider.route;
            $routeProvider
                .when('/users/usergrid', rpRoute.resolve('App/Users/Partials', 'App/Users/Ctrl', 'usergrid', '/'))
                .when('/users/nggrid', rpRoute.resolve('App/Users/Partials', 'App/Users/Ctrl', 'nggrid', '/'));
        }]);

    return usersModule;
});