/**
 * Created by maurice on 9/16/2015.
 */

(function(){
    var module = angular.module('dataService', []);

    module.service('validate', function() {
        this.validateCat = function(cat) {
            return true;
        }
    })

}());