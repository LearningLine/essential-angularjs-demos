/**
 * Created by Student on 18/02/2015.
 */

var app = angular.module('calculator2', []);

app.factory('mod2Calculator', function () {
    return {
        add: function (x, y) {
            return (+x) + (+y);
        }
    };
});
