angular.module('app.directives.burgerInfo', [])
    .directive('burgerInfo', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/directives/burgerInfo.html'
        }
    });