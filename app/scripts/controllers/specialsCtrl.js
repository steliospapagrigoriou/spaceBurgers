'use strict';

function isSpecial(element){
    return element.promoted
}

angular.module('spaceBurgersApp')
    .controller('specialsCtrl',['$scope', 'Burgers', '$interval', 'localStorageService', '$window',
        function ($scope, Burgers,  $interval, localStorageService, $window) {

            updateBurgerList();

            $interval(function(){
                console.log('Updating');
                updateBurgerList();
            }, 15000); // update every 15secs

            /******************************************************************************/

            function updateBurgerList(){
                console.log($window.navigator.onLine)
                if ($window.navigator.onLine){
                    Burgers.getAll()
                        .then(function(response){
                            localStorageService.set('burgers', response.data.burgers);
                            displaySpecial();
                        });
                }
                displaySpecial();
            }

            function displaySpecial(){
                var burgerList = localStorageService.get('burgers');
                if (burgerList)
                    $scope.specials = burgerList.filter(isSpecial);
            }
    }]);
