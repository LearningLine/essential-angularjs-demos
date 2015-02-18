/**
 * Created by Student on 18/02/2015.
 */


describe('The DemoCtrl', function () {
    var ctrl, scope, httpBackend;

    beforeEach(module('demoApp'));

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        ctrl = $controller('DemoCtrl',
            {
                $scope: scope
            });
    }));

    it('should be created', function () {
        expect(ctrl).toBeDefined();
    })


    it('should have a person', function(){
        expect(scope.person.firstName).toBe('Maurice');
    });

    it('should put the person to the server on save', function () {

        httpBackend.expectPUT('/person').respond(200);


        scope.save();

        httpBackend.flush();

        expect(scope.saved).toBeTruthy();
    });

    it('should put the person to the server on save can fails', function () {

        httpBackend.expectPUT('/person').respond(400);


        scope.save();

        httpBackend.flush();

        expect(scope.saved).toBeFalsy();
    });

});