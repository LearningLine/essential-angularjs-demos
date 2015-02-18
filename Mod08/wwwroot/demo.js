var app = angular.module('demoApp', []);

app.factory('calculator', function () {
    return {
        add: function (x, y) {
            return (+x) + (+y);
        }
    };
});


app.controller('DemoCtrl', function ($scope, $http) {
    $scope.saved = false;

    $scope.person = {
        firstName: 'Maurice',
        lastName: 'de Beijer'
    };

    $scope.save = function () {
        $http.put('/person', $scope.person)
            .then(function () {
                $scope.saved = true;
            }, function () {
                $scope.saved = false;
                $scope.showError('There was an error!');
            })
    };

    $scope.showError = function (msg) {
        console.log(msg)
    };
});
