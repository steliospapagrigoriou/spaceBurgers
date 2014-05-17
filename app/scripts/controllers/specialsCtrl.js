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

        $scope.buyBurger = function(burgerId, bitcoins) {
            // this is too easy to hack (ask to buy a burger with 0 bitcoins for example)
            // but since we are not the burger place, we don't really care
            // - plus there is extra safety at the server side

            alert('clicked')
            Burgers.buyOne(burgerId, bitcoins)
                .then(function (response) {
                    var message = '';

                    if (response.data.message) {
                        message = message
                    }
                    else {
                        if (response.data.id) {

                            message += 'Something is wrong with our choice:';
                            for (var i = 0; i < response.data.id.length; i++)
                                message += i + '\n';
                        }
                        if (response.data.bitcoin) {

                            message += 'Something is wrong with our payment:'
                            for (var i = 0; i < response.data.bitcoin.length; i++)
                                message += i + '\n';
                        }
                    }
                    alert(message);
                });
        }
    }]);
