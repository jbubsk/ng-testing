require('reflect-metadata');
require('zone.js');
ng = require('angular2');

(function () {
    var AppComponent = ng
        .Component({
            selector: 'my-app',
            template: '<h1>angular2 app</h1>'
        })
        .Class({
            constructor: function () {

            }
        });

    ng.bootstrap(AppComponent);
}());

console.log('app loaded');