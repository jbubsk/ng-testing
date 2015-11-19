import 'angular';

import 'angular-ui-router';
import 'angular-resource';

import servicesModule from './services/auth';
import loginModule from './modules/login/login.module';

angular.module('application', [
        'ui.router',
        servicesModule.name,
        loginModule.name
    ])
    .config(function ($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');
    });