/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular',
        'angular2-notifications': 'node_modules/angular2-notifications',
        'shared/services': 'app/shared/services',
        'shared/directives': 'app/shared/directives',
        'shared/components': 'app/shared/components',
        'shared/pipes': 'app/shared/pipes',
        'app/components': 'app/components',
        'materialize-css': 'node-modules/materialize-css',
        'materialize': 'node_modules/angular2-materialize',
        'angular2-materialize': 'node_modules/angular2-materialize'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'materialize-css': {
            'main': 'dist/js/materialize'
        },
        'materialize': {
            'main': 'dist/materialize-directive',
            'defaultExtension': 'js'
        }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
        'angular2-notifications'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
