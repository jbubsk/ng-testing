require('angular');
require('angular-ui-router');
require('angular-resource');

var servicesModule = require('./services/auth'),
    formModule = require('./modules/form'),
    template = require('./modules/main.template.html!text');

angular.module('application', [
        'ui.router',
        'ngResource',
        servicesModule.name,
        formModule.name
    ])
    .config(function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');

    })
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'main',
            url: '/',
            controller: 'DataController',
            controllerAs: 'ctrl',
            template: template
        });
    });