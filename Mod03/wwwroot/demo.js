var module = angular.module('demoApp', []);


module.service('peopleValidator', function(){

    this.validate = function(person){
        return person.firstName && person.lastName;
    }
})

module.controller('DemoCtrl', function ($scope, $rootScope, peopleValidator) {

    $scope.person = {
        firstName: 'Maurice',
        lastName: 'de Beijer'
    };

    $scope.people = [{
        firstName: 'Jack',
        lastName: 'Bauer'
    }, {
        firstName: 'Mary',
        lastName: 'Poppins'
    }];

    $scope.save = function () {
        var person = angular.copy($scope.person);

        if (peopleValidator.validate(person)){

            $scope.people.push(person);

            $rootScope.$broadcast('urn:demoApp:person:added', person)

        }

    };


    function demo(){
        $q.all(
            $http.get('1'),
            $http.get('2'))
            .then(function(r1, r2){});

    }
});


module.controller('OtherCtrl', function ($scope) {
    $scope.message = '';

    $scope.$on('urn:demoApp:person:added', function(e, data){
        $scope.message = data.firstName + ' was added';
    })
});