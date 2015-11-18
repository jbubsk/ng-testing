var LoginModel = require('./login-model');

module.exports = angular.module('app.main', [])
    .controller('DataController', function (AuthService) {
        "use strict";

        this.angularVersion = 1.4;

        this.model = new LoginModel();

        this.login = function () {
            AuthService.login(this.model)
        };
    });