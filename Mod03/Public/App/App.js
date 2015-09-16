/**
 * Created by maurice on 9/16/2015.
 */

(function () {

    var theApp = angular.module('theApp', ['dataService']);

    theApp.controller('DemoController', function ($scope, $q, $timeout, validate) {


        $scope.pets = [
            {name: 'Zorro', type: 'cat'},
            {name: 'Diego', type: 'cat'},
            {name: 'Sarah', type: 'cat'}
        ];

        $scope.$watch('pets[0].name', function(newValue, oldValue){
            console.log(newValue, oldValue);

        });

        $scope.message = '...';
        $scope.doAsync = function(){

            $scope.message = '...';

            var deferred = $q.defer();


            deferred.promise.then(function(data){
                $scope.message = data;
            });


            $timeout(function(){
                deferred.resolve('A second passed');
            }, 1000)


        }

        validate.validateCat({});
    });

}());