/**
 * Created by maurice on 9/18/2015.
 */

(function () {
    'use strict';
    var theApp = angular.module('theApp', ['ngResource', 'ngRoute']);

    theApp.config(function($routeProvider, $locationProvider){

        $routeProvider.when('/books', {
            controller: 'BookListController',
            templateUrl: '/templates/books-list.html',
            controllerAs: 'ctrl'
        });

        $routeProvider.when('/books/:id', {
            controller: 'BookEditController',
            templateUrl: '/templates/books-edit.html',
            controllerAs: 'ctrl'
        });

        $routeProvider.otherwise({
            redirectTo:'/books'
        });
    });

    theApp.factory('Book', function ($resource) {
        return $resource('/api/books/:id');
    });

    theApp.controller('BookListController', function (Book, $location) {
        console.log('In the BookListController');
        this.books = Book.query();
    });

    theApp.controller('BookEditController', function (Book, $routeParams, $scope) {
        this.book = Book.get({id: $routeParams.id});
        $scope.message = 'Some data from the controller';
    });

    theApp.directive('axaSetFocus', function(){

        var ddo = {
            link: function(scope, element){
                console.log(element)
                element[0].focus();
            }
        };

        return ddo;
    });


    theApp.directive('axaAddText', function(){

        return {
            compile: function(element){

                element.text('This is new text')

            }
        }
    });

    theApp.directive('scopedThing', function(){
        return {
            scope: true,
            template: '<div>This is {{message}} the scoped thing.</div>'
        };
    });

    theApp.directive('isolatedThing', function(){
        return {
            scope: {
                msg: '='
            },
            template: '<div>This is {{msg}} the isolated thing.</div>'
        };
    });

    theApp.directive('booksTemplate', function(){
        return {
            templateUrl: '/templates/book-template.html'
        };
    });

    theApp.directive('myTransclude', function(){
        return {
            transclude: true,
            template: '<div>This is <span ng-transclude=""></span> the template.</div>'
        }
    })
}());
