/**
 * Created by maurice on 9/17/2015.
 */

(function () {
'use strict';
    var theApp = angular.module('theApp', ['ngResource']);

    theApp.controller('DemoController', function ($http) {
        var _this = this;

        $http.get('/api/books').then(function (e) {
            //console.log(this);
            _this.books = e.data;

        }, function (err) {
            console.log(err);
        });

        this.addBook = function(){
            $http.post('/api/books', {title:"The new book"});
        }
    });

    theApp.factory('Book', function($resource){
        return $resource('/api/books/:id');
    });

    theApp.controller('ResourceController', function (Book) {
            this.books = Book.query();
console.log(this.books.length);

        this.addBook = function(){
            //$http.post('/api/books', {title:"The new book"});
        }
    });


    //function query(){
    //    var books = [];
    //
    //    $http.get('...').then(function(e){
    //        e.data.forEach(function(book){
    //            book.push(book);
    //        })
    //    })
    //
    //    return books;
    //}


}());