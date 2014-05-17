'use strict';

angular.module('spaceBurgersApp')
    .controller('specialsCtrl', function ($scope) {
        $scope.specials = [
            'special1',
            'special2',
            'special3'
        ];
    });
