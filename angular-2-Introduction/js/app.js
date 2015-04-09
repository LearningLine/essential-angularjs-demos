/**
 * Created by spmorgan on 4/6/15.
 */
(function() {
    var app = angular.module('CoolGame', [])

    app.controller('CreateCtrl', function ($scope) {
        //interact with the view
        //provide methods the view can call
        $scope.character = {}
        $scope.classes = [
            {name: "Thief", id: 0},
            {name: "Warrior", id: 1}
        ]

        $scope.characterCreated = false
        $scope.create = function () {
            console.log("Creating character: " + $scope.character.name);
            $scope.characterCreated = true;
            $scope.character.stats = {
                strength: 18,
                intelligence: 18,
                wisdom: 18
            }
        }
    })



})()