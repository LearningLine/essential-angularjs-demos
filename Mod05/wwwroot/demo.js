var module = angular.module('demoApp', []);


module.controller('DemoCtrl', function ($scope) {
    $scope.person = {
        firstName: 'Maurice',
        lastName: 'de Beijer'
    };

    $scope.$watch('person.firstName', function(newValue, oldValue){
        console.log(oldValue, newValue);
    });

    $scope.save = function () {
        alert('Saving ' +
        $scope.person.firstName + ' ' +
        $scope.person.lastName);
    }
});

