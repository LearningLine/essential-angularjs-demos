var module = angular.module('demoApp', ['ngResource', 'ngRoute']);

module.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/list', {
        controller: 'MovieListCtrl',
        templateUrl: '/list-template.html',
        resolve: {
            movies: function (Movie) {
                return Movie.query();
                ;
            }
        }
    });

    $routeProvider.when('/details/:id', {
        controller: 'MovieDetailsCtrl',
        templateUrl: '/details-template.html',
        resolve: {
            movie: function (Movie, $route) {
                return Movie.get({id: $route.current.params.id});
            }
        }
    });

    $routeProvider.otherwise({redirectTo: '/list'});

    //$locationProvider.html5Mode(true);
})

module.factory('Movie', function ($resource) {
    return $resource('/movies/:id');
})

module.controller('MovieListCtrl', function ($scope, movies, $location) {
    $scope.movies = movies;

    $scope.details = function (id) {
        $location.path('/details/' + id);
    }

});

module.controller('MovieDetailsCtrl', function ($scope, movie, $location) {

    $scope.movie = movie;

    $scope.toList = function () {
        $location.path('/list');
    }
});
