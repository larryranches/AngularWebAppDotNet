define(['mods/users', '../Services/usergridfactory.js'], function (usersModule, fac) {
    'use strict';

    var nggridCtrl = function ($scope, usergridFactory) {
     
        $scope.userData = [];

        $scope.gridOptions = {
            data: 'userData',
            columnDefs: [
                { field: 'FirstName', displayName: ' First Name' },
                { field: 'LastName', displayName: ' Last Name' }
            ]           
        };

                 
        // Init function
        function init() {
            // Load data from factory 
            //usergridFactory.getUsers()
            //    .success(function (data) {
            //        $scope.userData = data;
            //    })
            //    .error(function (error) {
            //        console.log(error);
            //    });

            self.getUsers();

        }

        self.getUsers = function () {
            var param = {
                sort: '',
                filter: ''                
            }
            return usergridFactory.getUsers(param).then(function (data) {
                $scope.userData = data;
            });
        };

        init();
    };

    usersModule.controller('nggridCtrl', ['$scope', 'usergridFactory', nggridCtrl]);
});