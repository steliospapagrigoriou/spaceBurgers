'use strict';

function isSpecial(element){
    return element.promoted
}

angular.module('spaceBurgersApp')
    .controller('mainCtrl',['$scope', 'Burgers', '$interval', 'localStorageService', '$window',
        function ($scope, Burgers,  $interval, localStorageService, $window) {

            displayBurgers(); // maybe we have something stored - give immediate user gratification
            update();

            $interval(function(){
                console.log('Updating');
                update();
            }, 15000); // update every 15secs

            /******************************************************************************/

            function update(){
                if ($window.navigator.onLine){
                    // fetch only if online
                    Burgers.getAll()
                        .then(function(response){
                            localStorageService.set('burgers', response.data.burgers);
                            displaySpecial();
                        });
                }
                displayBurgers();
            }

            function displayBurgers(){
                var burgerList = localStorageService.get('burgers');
                if (burgerList){
                    $scope.specials = burgerList.filter(isSpecial);
                    $scope.burgerList = burgerList;
                }

            }

        }]);
