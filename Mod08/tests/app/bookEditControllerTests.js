/**
 * Created by maurice on 9/18/2015.
 */


describe('The BookEditController', function () {
    'use strict';
    var ctrl;

    beforeEach(module('theApp'));


    describe('with fake service', function () {
        beforeEach(inject(function ($controller) {

            ctrl = $controller('BookEditController', {
                $scope: {},
                Book: {
                    get: function () {
                        return {};
                    }
                }
            });
        }));

        it('should have a book property', function () {

            expect(ctrl.book).toBeDefined();
        })
    });


    describe('with fake HTTP', function () {
        var httpBackend;

        beforeEach(inject(function ($controller, $httpBackend) {
            httpBackend = $httpBackend;

            httpBackend.when('GET','/api/books/42').respond({title: 'Cool'});

            ctrl = $controller('BookEditController', {
                $scope: {},
                $routeParams: {id:42}
            });
        }));

        it('should have a book with a title property', function () {
            httpBackend.flush();
            expect(ctrl.book.title).toBe('Cool');
        })
    })

});