import 'angular';
import 'angular-mocks';
import LoginModel from '../modules/login/login-model';

describe("angular auth service", function () {
    let AuthService;

    beforeEach(angular.mock.module('app.services'));

    beforeEach(function () {
        angular.mock.inject(function (_AuthService_) {
            AuthService = _AuthService_;
        });
    });

    it('service is defined', function (done) {
        expect(AuthService).not.toEqual(undefined);
        done();
    });

    //it('service call login', function (done) {
    //    let model = new LoginModel();
    //    model.username = 'valera';
    //    model.password = 'valera';
    //    AuthService.login(model).then(function (data) {
    //        console.log(data);
    //        done()
    //    });
        //expect(service).not.toEqual(undefined);
        //done();
    //});
});