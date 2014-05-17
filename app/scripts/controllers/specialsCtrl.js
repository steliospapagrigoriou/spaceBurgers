'use strict';

function isSpecial(element){
    return element.promoted
}

angular.module('spaceBurgersApp')
    .controller('specialsCtrl', function ($scope) {
        $scope.specials = [
            'special1',
            'special2',
            'special3'
        ];
    });
