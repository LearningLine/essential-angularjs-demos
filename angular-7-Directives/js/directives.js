/**
 * Created by spmorgan on 4/8/15.
 */
(function() {
    angular.module('CoolGame')
        .directive('gameTitle', function () {
            return {
                restrict: 'E',
                template: "<H1>My Supergame</H1>"
            }
        })
        .directive('gameTitleTransclude', function() {
            return {
                restrict: 'E',
                template: "<H1 ng-transclude></H1>",
                transclude: true,
                replace: true
            }
        })

        .directive('createCharacterStep1', function () {
            return {
                restrict: 'E',
                templateUrl: "templates/_createCharacterStep1.html",
                replace: true,
                scope: {
                    character: "=",
                    clickHandler: "&"
                },
                controller: function ($scope, Classes) {
                    $scope.classes = Classes.query();
                    $scope.create = function() {
                        //console.log("create in directive")
                        $scope.clickHandler();
                    }
                }
            }
        })

        .directive('colorWhenHover', function () {
            return {
                restrict: 'A',
                link: function (scope, elem, attr) {
                    console.log(attr)
                    elem.on('mouseover', function () {
                        elem.addClass(attr.colorWhenHover)
                    })
                    elem.on('mouseout', function() {
                        elem.removeClass(attr.colorWhenHover)
                    })
                }
            }
        })

        .directive('colorWhenHover2', function () {
            return {
                restrict: 'A',
                link: function (scope, elem, attr) {
                    console.log(attr)
                    elem.on('mouseover', function () {
                        elem.addClass(attr.colorWhenHover2)
                    })
                    elem.on('mouseout', function() {
                        elem.removeClass(attr.colorWhenHover2)
                    })
                }
            }
        })



        .directive('showErrors', function ($compile) {
            return {
                restrict: "A",
                require: "^form",
                link: function (scope, elem, attr, formCtrl) {
                    console.log(elem);
                    console.log(formCtrl);
                    var formName = formCtrl.$name;
                    console.log(formName);
                    var html = '<div ng-show="' + formName + '.$error.minlength">The name is too short!</div>';
                    elem.after($compile(html)(scope));
                }
            }
        })

})()