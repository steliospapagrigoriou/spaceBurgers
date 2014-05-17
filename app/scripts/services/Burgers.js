'use strict';



angular.module('spaceBurgersApp')
    .factory('Burgers', ['$http', function($http) {
        return {
            getAll: function () {
                return $http.get('/api/burgers.json')
            }

        }
    }]);