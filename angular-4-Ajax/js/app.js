/**
 * Created by spmorgan on 4/6/15.
 */
(function() {
    var app = angular.module('CoolGame', ['ngCookies', 'ngMockE2E'])

    app.constant('EVENTS', {
        STATS_ROLLED: "CHARACTER_STATS_ROLLED"
    })

    app.service('Character', function ($cookieStore) {
        this.name = null;
        this.stats = null;
        this.created = false;
    })

    app.provider('Character2', function() {
        var level = 0;
        return {
            $get: function () {
                return {
                    name: 'Shawn',
                    level: level
                };
            },
            setLevel: function (newLevel) {
                console.log("Set Level")
                level = newLevel;
            }
        }
    })

    app.config(function(Character2Provider){
        Character2Provider.setLevel(10);
    })

    //app.factory('Classes', function($http) {
    //    return {
    //        query: function () {
    //            return $http.get('http://localhost:8080/api/classes');
    //        }
    //    }
    //})

    app.factory('Classes', function($http) {
        return {
            query: function () {
                var arr = [];
                $http.get('http://localhost:8080/api/classes').success(function (data) {
                    data.forEach(function (item) {
                            arr.push(item);
                        }
                    )
                });
                return arr;
            }
        }
    })

    app.factory('Classes', function($http) {
        return {
            query: function (callback) {
                $http.get('http://localhost:8080/api/classes').success(callback);
            }
        }
    })

    app.controller('CreateCtrl', function ($scope, Classes, $http, $rootScope, $cookieStore, $interval, EVENTS, Character, Character2) {
        //interact with the view
        //provide methods the view can call
        //$scope.step = 1;
        $rootScope.step = 1;

        console.log(Character2);

        Character = $cookieStore.get('character') || {
            gold: 0
        }
        $scope.character = Character;

        console.log($scope.character);

        Classes.query(function (data) {
            console.log("callback");
            console.log(data);
            $scope.classes = data;
        });

        //Classes.query().success(function (data) {
        //    $scope.classes = data;
        //})

        // $http.get('http://localhost:8080/api/classes').success(function (data) {
        //     console.log(data);
        //     $scope.classes = data;
        //})

        $scope.classChange = function (className) {
            $http.jsonp('https://ajax.googleapis.com/ajax/services/search/images', {
                params: {
                    v: "1.0",
                    q: className,
                    callback: "JSON_CALLBACK"
                }
            }).success(function (arrayOfImages) {
                console.log(arrayOfImages)
                $scope.classImage = arrayOfImages.responseData.results[0].url;
            })
        }

        $scope.characterCreated = false

        //setInterval(function () {
        //    $scope.$apply(function () {
        //        $scope.character.gold = Math.floor(Math.random()*1000)
        //    })
        //}, 1000)

        var goldTimer = $interval(function () {
            $scope.character.gold = Math.floor(Math.random()*1000)
        }, 1000)

        $scope.create = function () {
            console.log("Creating character: " + $scope.character.name);
            $scope.character.created = true;
            $rootScope.step = 2;
            $cookieStore.put('character', $scope.character);
            $interval.cancel(goldTimer)

        }

        $scope.$watch("step", function (newVal, oldVal) {
            console.log('Step changed to ' + newVal);
        })

        $scope.$on(EVENTS.STATS_ROLLED, function () {
            console.log('stats rolled');
        })

    })

    app.controller('StatCtrl', function ($scope, $rootScope,EVENTS) {
        //console.log($scope.character, $scope.characterCreated)
        $scope.rollStats = function () {
            $scope.character.stats = {
                strength: Math.floor(Math.random()*18)+1,
                intelligence: Math.floor(Math.random()*18)+1,
                wisdom: Math.floor(Math.random()*18)+1
            }
            $rootScope.step = 3;
            //console.log($scope.step)

            $scope.$emit(EVENTS.STATS_ROLLED);
        }
    })

    app.filter('uppercaseFirst', function () {
        return function (word) {
            return word.charAt(0).toUpperCase() + word.substring(1, word.length);
        }
    })

    app.run(function ($httpBackend) {
        console.log('run')
        $httpBackend.when('GET', 'api/weapons').respond([]);
        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenJSONP(/.*/).passThrough();
    })

})()