require.config({
    paths: {
        'ng': '../Scripts/Angular',
        'mods': '_modules',
        'utils': '../Scripts/Custom/Utilities'
    },

    shim: {
        'ng': { exports: 'ng' }
    }
});

require(['mods/app'], function () {
    // Manually kick off/bootstrap Angular on Home/Index.cshtml with main 'app' module
    angular.bootstrap(document, ['app']); 
});