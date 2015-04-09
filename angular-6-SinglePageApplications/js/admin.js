/**
 * Created by spmorgan on 4/7/15.
 */
angular.module('CoolGame')
    .service('Monsters', function () {

    })
.controller('MonsterCtrl', function ($scope, $http, $resource, monsterList, $routeParams, $location) {
        //$http.get("http://localhost:8080/api/monsters")
        //    .success(function (data) {
        //        $scope.monsters = data;
        //    })
        //
        //$scope.save = function (monster) {
        //    $http.post("http://localhost:8080/api/monsters/"+monster.id, monster);
        //}
        console.log($routeParams);

        $location.path('/admin')

        $scope.newMonster = {
            stats: {}
        };

        $scope.monsters = monsterList

        $scope.save = function (monster) {
            monster.$save()
        }

        $scope.kill = function(monster) {
            monster.$kill()
        }

        $scope.create = function (monster) {
            console.log("Creating monster")
            var newMonster = new MonsterResource(monster);
            newMonster.$save()
        }

    })