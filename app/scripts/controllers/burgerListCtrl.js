'use strict';

function listThe(burgerList){

}

angular.module('spaceBurgersApp')
    .controller('burgerListCtrl',['$scope', 'Burgers', function ($scope, Burgers) {

        Burgers.getAll()
            .then(function(response){
                $scope.burgerList = response.data.burgers;
            })
    }]);
