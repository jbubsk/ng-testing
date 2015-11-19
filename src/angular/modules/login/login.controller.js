import LoginModel from './login-model';

export default function (AuthService) {
    "use strict";

    this.angularVersion = 1.4;
    this.modelInvalid = true;
    this.model = new LoginModel();

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