define(['mods/users', '../Services/usergridfactory.js'], function (usersModule, fac) {
    'use strict';

    var usergridCtrl = function ($scope, usergridFactory) {

        var self = this;

        $scope.pageTitle = "User Table";        

        // Create objects
        $scope.Users = [];

        // Grid functions
        $scope.addMode = false;

        $scope.toggleAddMode = function () {
            $scope.addMode = !$scope.addMode;
        };

        $scope.toggleEditMode = function (user) {
            user.editMode = !user.editMode;
        };
        // End grid functions


        // Grid CRUD Events
        //$scope.addUser = function () {
        //    usergridFactory.insertUser($scope.user)
        //        .success(function () {                   
        //            $scope.addMode = false;
        //            init();
        //            console.log("ADD SUCCESS");
        //        })
        //         .error(function (error) {
        //             console.log(error);
        //         });
        //};

        $scope.addUser = function () {
            usergridFactory.insertUser($scope.user).then(function() {
                $scope.addMode = false;
                init();
                console.log($scope.user.FirstName + ' insert successful');
            });
        };

        //$scope.deleteUser = function (id) {
        //    usergridFactory.deleteUser(id)
        //        .success(function () {                    
        //            init();
        //            console.log("DELETE SUCCESSFUL");
        //        })
        //        .error(function (error) {
        //            console.log(error);
        //        });
        //};

        $scope.deleteUser = function (id) {
            var params = {
                id: id
            };
            return usergridFactory.deleteUser(params).then(function(data) {
                self.getUsers();
                console.log(params.id + ' deleted.');
            });
        };

        //$scope.updateUser = function (user) {
        //    usergridFactory.updateUser(user)
        //        .success(function () {
        //            init();
        //            console.log("UPDATE SUCCESSFUL");                 
        //        })
        //        .error(function (error) {
        //            console.log(error);
        //        });
        //};

        $scope.updateUser = function (user) {
            return usergridFactory.updateUser(user).then(function(results) {
                self.getUsers();
                console.log('SUCCESS');
            });
        };


        // End CRUD Grid Events

        // Init function
        function init() {
            // Load data from factory 
        //    usergridFactory.getUsers()
        //        .success(function (data) {
        //            $scope.Users = data;
        //        })
        //        .error(function (error) {
        //            console.log(error);
            //        });

            self.getUsers();
        }


        self.getUsers = function () {
            var param = {
                sort: '',
                filter: ''
            }
            return usergridFactory.getUsers(param).then(function(data) {
                $scope.Users = data;
            });
        };
        

        init();
    };

    usersModule.controller('usergridCtrl', ['$scope', 'usergridFactory', usergridCtrl]);
});