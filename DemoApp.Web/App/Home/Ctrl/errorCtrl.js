define(['mods/home'], function (home) {
    'use strict';

    var errorCtrl = function ($scope) {

        $scope.errorMessage = 'This partial does not exist';

    };

    home.controller('errorCtrl', ['$scope', errorCtrl]);
});