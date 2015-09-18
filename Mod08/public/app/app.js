/**
 * Created by maurice on 9/18/2015.
 */

(function () {
    'use strict';
    var theApp = angular.module('theApp', ['ngResource', 'ngRoute']);

    theApp.config(function ($routeProvider, $locationProvider) {

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
            redirectTo: '/books'
        });
    });

    theApp.factory('Book', function ($resource) {
        return $resource(
            '/api/books/:id', {
                id: '@id'
            }, {
                update: {method: 'PUT'}
            });
    });

    theApp.service('bookValidator', function ($log) {
        this.validate = function (book) {
            var errors = [];

            if (!book.title) {
                errors.push('A book needs a title.');
            }

            if (!book.author) {
                errors.push('A book needs an author.');
            }

            return errors;
        }
    });


    theApp.controller('BookListController', function (Book, $location) {
        console.log('In the BookListController');
        this.books = Book.query();
    });

    theApp.controller('BookEditController', function ($scope, Book, $routeParams, bookValidator, $window) {
console.log($routeParams)
        this.book = Book.get({id: $routeParams.id});

        this.save = function () {
            var errors = bookValidator.validate(this.book);

            if (errors.length) {
                $window.alert(errors[0]);
            } else {
                this.book.$update();
            }
        }
    });
}());
