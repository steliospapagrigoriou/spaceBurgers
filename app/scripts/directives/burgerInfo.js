angular.module('app.directives.burgerInfo', [])
    .directive('burgerInfo', function(Burgers){
        return {
            restrict: 'E',
            transclude: true,
            scope:{
                burger: "=",
                type: "="
            },
            controller: function($scope, $window ){

                $scope.$watch('$window.navigator.onLine', function() {
                    $scope.isOnline = $window.navigator.onLine;
                    console.log($scope.isOnline)
                });

                $scope.buyBurger = function(burgerId, bitcoins) {
                        // this is too easy to hack (ask to buy a burger with 0 bitcoins for example)
                        // but since we are not the burger place, we don't really care
                        // - plus there is extra safety at the server side
                        console.log('fired');
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
                    };
            },
            templateUrl: 'views/directives/burgerInfo.html'
        }
    });