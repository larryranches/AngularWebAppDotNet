define(['mods/home', 'mods/users'], function () {
    'use strict';

    // Create main/parent module called 'app'.  
    // All other modules are considered child modules of 'app'.
    // This module should primarily be used to load the necessary child modules.  Allows for dynamic module loading. 
    // (Example:  loading ONLY modules based on user roles, etc.)

    var app = angular.module('app', ['app.home', 'app.users']);

    return app;
});