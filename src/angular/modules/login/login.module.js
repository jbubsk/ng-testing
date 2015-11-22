import angular from 'angular';
import LoginModel from './login-model';
import LoginController from './login.controller';
import loginRouter from './login.router';
import sliderDirective from './directive/slider';

export default angular.module('app.login', [])
    .config(loginRouter)
    .controller('DataController', LoginController)
    .directive('slider', sliderDirective);