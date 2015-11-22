import 'angular';
import 'angular-mocks';

import LoginModel from './login-model';

describe("test angular", function () {
    let controller, $q, $rootScope, AuthServiceMock, deferred;


    beforeEach(function () {
        angular.mock.module('ui.router');
        angular.mock.module('app.login');
        angular.mock.module('app.services');
    });
    beforeEach(inject(function ($controller) {
        controller = $controller('DataController', {
            AuthService: {}
        });
    }));

    it('check angularVersion', function (done) {
        expect(controller.angularVersion).toEqual(1.4);
        done();
    });

    it('model validation', function (done) {
        expect(controller.modelInvalid).toEqual(true, "expected controller.modelInvalid to be true");
        done();
    });
    describe('AuthServiceMock.login: ', function () {

        beforeEach(inject(function (_$q_, _$rootScope_) {
            $q = _$q_;
            $rootScope = _$rootScope_;
        }));

        beforeEach(inject(function ($controller) {
            AuthServiceMock = {
                login: function () {
                    deferred = $q.defer();
                    return deferred.promise;
                }
            };

            spyOn(AuthServiceMock, 'login').and.callThrough();

            controller = $controller('DataController', {
                AuthService: AuthServiceMock
            });

            controller.login({username: 'e', password: 'e'});
        }));

        describe('Success login - ', function () {
            beforeEach(function () {
                deferred.resolve();
                $rootScope.$apply();
            });

            it('AuthServiceMock.login invoke - ', function (done) {
                expect(AuthServiceMock.login).toHaveBeenCalled();
                done();
            });
            it('Check logged state -', function (done) {
                expect(controller.loggedIn).toEqual(true, "expected true");
                done();
            });
        });
        describe('Failed login - ', function () {
            beforeEach(function () {
                deferred.reject();
                $rootScope.$apply();
            });

            it('AuthServiceMock.login invoke - ', function (done) {
                expect(AuthServiceMock.login).toHaveBeenCalled();
                done();
            });
            it('Check logged state -', function (done) {
                expect(controller.loggedIn).toEqual(false, "expected false");
                done();
            });
        });
    });
});