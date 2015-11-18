module.exports = angular.module('app.services', [])
    .constant('CONST', {endpoint: 'http://172.16.16.114:8085'})
    .provider('AuthService', function () {
        return {
            $get: AuthService
        }
    });

function AuthService($log, $resource, CONST) {
    return {
        login: function (model) {
            $log.debug("Login is invoked");
            return $resource(CONST.endpoint + '/auth/login', null, {
                post: {
                    method: 'post'
                }
            }).post(model).$promise
        }
    }
}