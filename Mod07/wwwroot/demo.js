var module = angular.module('demoApp', []);

module.controller('DemoCtrl', function ($scope) {

    $scope.person = {
        firstName: 'Maurice',
        lastName: 'de Beijer'
    };
});
module.directive('dmSetFocus', function ($log) {
    return {
        link: function (scope, element, attrs) {

            element[0].focus();
            $log.log('setting focus', attrs.dmSetFocus, attrs.ngModel);

            var o = JSON.parse(attrs.dmSetFocus)
            $log.log(o)

            element.on('$destroy', function () {
                // cleanup logic
            })
        }
    }
});


module.directive('dmWrapper', function () {
    return {
        templateUrl: '/wrapper-template.html',
        transclude: true
    }
})

