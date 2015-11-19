import template from './login.template.html!text';

function router($stateProvider){
    $stateProvider.state({
        name: 'main',
        url: '/',
        controller: 'DataController',
        controllerAs: 'ctrl',
        template: template
    });
}

export default router;