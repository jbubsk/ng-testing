import angular from 'angular';
import LoginModel from './login-model';
import LoginController from './login.controller';

export default angular.module('app.login', [])
    .controller('DataController', LoginController);