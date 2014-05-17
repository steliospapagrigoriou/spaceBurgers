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

            Burgers.buyOne(burgerId, bitcoins)
                .then(function (response) {
                    var displayMessage   = '',
                        validation    = response.data.message,
                        idErrors      = response.data.id,
                        paymentErrors = response.data.bitcoin;

                    if (validation) {
                        displayMessage = validation
                    }
                    else {
                        if (idErrors) {

                            displayMessage += 'Something is wrong with our choice:';
                            for (var i = 0; i < idErrors.length; i++)
                                displayMessage += idErrors[i] + '\n';
                        }
                        if (paymentErrors) {

                            displayMessage += 'Something is wrong with our payment:'
                            for (var i = 0; i < paymentErrors.length; i++)
                                displayMessage += paymentErrors[i] + '\n';
                        }
                    }
                    alert(displayMessage);
                });
        }
    }]);
