/**
 * Created by maurice on 9/17/2015.
 */

(function () {
    'use strict';
    var theApp = angular.module('theApp', ['ngResource', 'ngRoute']);


    theApp.config(function($routeProvider, $locationProvider){

        $routeProvider.when('/books', {
            controller: 'BookListController',
            //template: 'This is a list'
            templateUrl: '/templates/books-list.html',
            controllerAs: 'ctrl'
        });

        $routeProvider.when('/books/:id', {
            controller: 'BookEditController',
            //template: 'This is a list'
            templateUrl: '/templates/books-edit.html',
            controllerAs: 'ctrl'
        });

        $routeProvider.otherwise({
            redirectTo:'/books'
        });

        //$locationProvider.html5Mode(true);
    });

    theApp.factory('Book', function ($resource) {
        return $resource('/api/books/:id');
    });

    theApp.controller('BookListController', function (Book, $location) {
        console.log('In the BookListController');
        this.books = Book.query();

        this.edit=function(book){
            $location.path('/books/' + book.id);

        }
    });

    theApp.controller('BookEditController', function (Book, $routeParams) {
        this.book = Book.get({id: $routeParams.id});
    });
}());