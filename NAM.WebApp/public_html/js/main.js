//Configures require.js
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        require: "vendor/require.js/require",
        jquery: 'vendor/jquery/jquery',
        knockout: 'vendor/knockout/knockout-min',
        lodash: 'vendor/lodash.js/lodash',
        vendor: 'vendor',
        highcharts: 'vendor/highcharts/highcharts'
    },
    //Shims provide a wrapper for libraries that are not AMD ready.
    shim: {
        "highcharts": {
            "exports": "Highcharts",
            "deps": ["jquery"]
        }
    }
});

requirejs(['jquery', 'knockout', 'lodash', 'highcharts'],
        function ($, ko, _, highcharts) {
            
            console.log('Start!!');
            
        });