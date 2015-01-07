define(['mods/users'], function (usersModule) {
    'use strict';

    var usersFactory = function ($http, $resource, Restangular) {
      
        //var urlBase = 'App/users/api/users';       
        Restangular.setBaseUrl('App/users/api/users/');
        var factory = {};
       
        // // GET
        //factory.getUsers = function () {           
        //    return $http.get(urlBase + "/GetUsers");
        //};       


        factory.getUsers = function(param) {
            return Restangular.all("GetUsers").getList(param);
        };        

        // POST
        factory.insertUser = function (user) {
            return Restangular.one('InsertUser').customPOST(user);
        };

        // PUT
        factory.updateUser = function (user) {
            //return $http.put(urlBase + '/UpdateUser/', user);
            return Restangular.one('UpdateUser').customPUT(user);
            
        }
        
        // DELETE
        factory.deleteUser = function (id) {
            //return $http.delete(urlBase + '/DeleteUser?id=' + id);
            return Restangular.one('DeleteUser').remove(id);
        };

        return factory;
    };
       
    usersModule.factory("usergridFactory", ["$http", "$resource", "Restangular", usersFactory]);
});