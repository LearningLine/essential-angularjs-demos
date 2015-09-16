/**
 * Created by maurice on 9/16/2015.
 */

(function(){


    angular.module('anotherModule', []);

    var theApp = angular.module('theApp', ['anotherModule']);

    theApp.controller('FirstController', function($scope){
        console.log("In FirstController");


        var person = {
            name: 'Maurice'
        };

        $scope.person = person;

        setInterval(function(){
            $scope.$apply(function(){
                $scope.now = new Date().toLocaleTimeString();
            });
        }, 1000);


        $scope.pets = [
            {name: 'Zorro'},
            {name: 'Diego'},
            {name: 'Sarah'}
        ];

        $scope.addPet = function    (){
            $scope.pets.push({name: '...'});
        }
    })

}());