define(['mods/home'], function (home) {
    'use strict';

    var homeCtrl = function ($scope) {

        $scope.pageTitle = "Home";
        $scope.welcome = 'Welcome!';

    };

    home.controller('homeCtrl', ['$scope', homeCtrl]);   
});