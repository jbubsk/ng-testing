describe("Some test", function () {
    it('first test', function (done) {
        expect(3).toEqual(3);
        done();
        console.log("test");
    });
});

//describe("test angular", function () {
//    var $controller;
//
//    module('app.main');
//    inject(function ($injector, AuthService) {
//        $controller = $injector.get('DataController', {
//            AuthService:AuthService
//        });
//    });
//
//    it('check angularVersion', function (done) {
//        expect($controller.angularVersion).toEqual(1.4);
//        done();
//    });
//});