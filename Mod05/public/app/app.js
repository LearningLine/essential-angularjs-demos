/**
 * Created by maurice on 9/17/2015.
 */

(function () {
    'use strict';
    var theApp = angular.module('theApp', ['ngResource']);

    theApp.factory('Book', function ($resource) {
        return $resource('/api/books/:id');
    });

    theApp.controller('BookController', function (Book, $scope) {
        this.book = Book.get({id: 1});

        this.save = function () {
        };


        this.emailChanged = function(inputForm){

            inputForm.$setValidity("customError",false);
        }
    });

}());