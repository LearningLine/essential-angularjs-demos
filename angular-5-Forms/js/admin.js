/**
 * Created by spmorgan on 4/7/15.
 */
angular.module('RPGAdmin', ['ngResource'])
    .service('Monsters', function () {

    })
.controller('MonsterCtrl', function ($scope, $http, $resource) {
        //$http.get("http://localhost:8080/api/monsters")
        //    .success(function (data) {
        //        $scope.monsters = data;
        //    })
        //
        //$scope.save = function (monster) {
        //    $http.post("http://localhost:8080/api/monsters/"+monster.id, monster);
        //}
        $scope.newMonster = {
            stats: {}
        };

        var MonsterResource = $resource('http://localhost:8080/api/monsters/:id', {id: '@id'}, {
            'kill': {
                method: 'DELETE'
            }
        })
        $scope.monsters = MonsterResource.query()

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