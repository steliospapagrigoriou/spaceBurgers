'use strict';

function isSpecial(element){
    return element.promoted
}

angular.module('spaceBurgersApp')
    .controller('specialsCtrl',['$scope', 'Burgers', function ($scope, Burgers) {

        Burgers.getAll()
            .then(function(response){
                var burgersList = response.data.burgers;
                $scope.specials = burgersList.filter(isSpecial)
            });
    }]);
