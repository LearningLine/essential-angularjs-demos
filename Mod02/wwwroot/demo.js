
var validators = angular.module('demoValidators', []);
validators.service('validator', function(){});

var module = angular.module('demoApp', ['demoValidators']);
module.controller('DemoCtrl', ['$scope','validator', function(s, validator){

    var person = {
        name : 'Maurice',
        nationality:'Dutch'
    };

    s.person = person;

    s.people = [
        {name:'Jack'},
        {name:'Mike'},
        {name:'Ann'}
    ];

    s.addPerson = function(){
        s.people.push({name:'A new person'})
    }

    setInterval(function(){
        s.$apply(function(){
            s.now = new Date().toLocaleTimeString();
        });
    }, 1000);
}]);