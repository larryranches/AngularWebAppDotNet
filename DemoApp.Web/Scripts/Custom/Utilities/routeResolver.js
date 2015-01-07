define([], function () {
    'use strict';

    var route = function () {

        this.$get = function () {
            return this;
        };

        this.route = function () {

            var resolve = function (viewsDir, ctrlDir, baseName, path) {
                if (!path) path = '';

                var routeDef = {};
                routeDef.templateUrl = viewsDir + path + baseName + '.html';
                routeDef.controller = baseName + 'Ctrl';
                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        var dependencies = [ctrlDir + path + baseName + 'Ctrl.js'];
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            },

            resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply();
                });

                return defer.promise;
            };

            return {
                resolve: resolve
            }
        }();
    };

    var routeResolverService = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()    
    routeResolverService.provider('routeResolver', route);
});