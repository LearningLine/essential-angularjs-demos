var app = angular.module('demoApp', ['calculator2','calculator1']);

app.controller('DemoCtrl', function ($scope, $http, mod1Calculator) {
    $scope.saved = false;

    $scope.person = {
        firstName: 'Maurice',
        lastName: 'de Beijer'
    };

    mod1Calculator.add(1,2);

    $scope.obj = {text : 'Hello'};
});
