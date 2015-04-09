/**
 * Created by spmorgan on 4/8/15.
 */

describe('StatCtrl', function() {
    beforeEach(module('CoolGame'))

    var $controller, $rootScope, EVENTS, $scope, statCtrl;

    beforeEach(inject(function(_$controller_, _$rootScope_, _EVENTS_) {
        $controller = _$controller_;
        EVENTS = _EVENTS_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        $scope = $rootScope.$new()
        $controller('StatCtrl', {
            $scope: $scope,
            EVENTS: EVENTS,
            $rootScope: $rootScope
        })
    })

    it('can create a character stats', function () {
        $scope.character = {};
        //console.log($scope)
        $scope.rollStats();
        expect($scope.character.stats.strength).toBeGreaterThan(0)
        expect($scope.character.stats.strength).toBeLessThan(18);
    })
    it('sets the step to 3', function () {
        $scope.character = {};
        //console.log($scope)
        $scope.rollStats();
        expect($rootScope.step).toBe(3);
    })
})

describe('Character Service', function () {
    beforeEach(module('CoolGame'))
    var Character;
    beforeEach(inject(function(_Character_) {
        Character = _Character_;
    }))

    it('is not created' , function() {
        var val = Character.created;
        expect(Character).toBeDefined();
        expect(val).toBeFalsy();
    })

})

describe('Classes service', function () {
    beforeEach(module('CoolGame'))
    var Classes, $httpBackend;
    beforeEach(inject(function(_Classes_, _$httpBackend_) {
        Classes = _Classes_;
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('http://localhost:8080/api/classes')
            .respond([{name:"Thief"}]);
    }))

    it('gets the class list', function() {
        var classes = Classes.query();
        $httpBackend.flush();
        expect(classes.length).toEqual(1)
    })

})

describe('GameTitle Directive', function () {
    beforeEach(module('CoolGame'));
    var elem
    beforeEach(inject(function($compile) {
        elem = angular.element('<game-title></game-title>');
        $compile(elem)({})
    }))
    it('should be the game title', function() {
        expect(elem.text()).toEqual('My Supergame')
    })

})

describe('length filter', function() {
    beforeEach(module('CoolGame'))
    var $filter;
    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_
    }))
    it('returns 0 when given null', function () {
        var length = $filter('uppercaseFirst');
        expect(length('blah')).toEqual('Blah');
    });
})