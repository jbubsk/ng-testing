import template from './slider.template.html!text';

function slider($log) {

    return {
        restrict: 'E',
        scope: {
            slides: '='
        },
        template: template,
        link: function (scope, element, attrs) {
            angular.forEach(scope.slides, function (item) {
                if (item.index+1 === +attrs.active) {
                    item.isActive = true;
                    return;
                }
            });
            scope.shiftLeft = function () {
                $log.debug('Hey');
            }
        }
    }
}

export default slider;