/**
 * Created by Student on 18/02/2015.
 */

var app = angular.module('calculator1', []);

app.factory('mod1Calculator', function () {
    return {
        add: function (x, y) {
            console.log('Add in calculator1')
            return (+x) + (+y);
        }
    };
});
