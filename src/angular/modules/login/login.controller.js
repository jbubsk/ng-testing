import LoginModel from './login-model';

export default function (AuthService, $log) {
    "use strict";

    $log.debug('Hey from LoginController');
    this.angularVersion = 1.4;
    this.modelInvalid = true;
    this.model = new LoginModel();
    this.slides = [
        {name: '1', index: 0},
        {name: '2', index: 1},
        {name: '3', index: 2},
        {name: '4', index: 3},
        {name: '5', index: 4},
        {name: '6', index: 5},
        {name: '7', index: 6},
        {name: '8', index: 7},
    ];

    this.login = function (model) {
        validateModel.call(this, model);
        if (!this.modelInvalid) {
            AuthService.login(model).then(()=> {
                this.loggedIn = true;
            }, () => {
                this.loggedIn = false;
            });
        }
    };

    function validateModel(model) {
        this.modelInvalid = !model.username || !model.password;
    }
}