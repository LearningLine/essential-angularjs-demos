var module = angular.module('demoApp', ['ngResource']);

module.factory('Movie', function ($resource) {
    return $resource('/movies/:id');
})

module.controller('MoviesCtrl', function ($scope, Movie) {

    $scope.movies = Movie.query();

    console.log($scope.movies.length);
    setTimeout(function () {
        console.log($scope.movies.length);

    }, 2000);

    $scope.movies.$promise.then(function(){
        console.log('in promise', $scope.movies.length);
    }, function (err) {
        console.log(err);
    })

    //$http.get('/movies', {headers:{'Angular': 'is cool'}}).then(function (e) {
    //    $scope.movies = e.data;
    //}, function (err) {
    //    console.log(err);
    //});
    //
    //$scope.addMovie = function () {
    //    $http.post('/movies', {title: 'New title'}).then(function () {
    //        alert('Saved new movie')
    //
    //    }, function (err) {
    //        console.log(err);
    //    });
    //}
});