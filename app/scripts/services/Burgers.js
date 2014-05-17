'use strict';

var resourceUrl = '/spaceApi/burgers/'

angular.module('spaceBurgersApp')
    .factory('Burgers', ['$http', function($http) {
        return {
            getAll: function () {
                return $http.get(resourceUrl+'?format=json')
            },
            buyOne: function(burgerId, bitcoins){
                return $http.post(
                    resourceUrl,
                    {
                        id: burgerId,
                        bitcoin: bitcoins
                    }
                );
            },
        }
    }]);