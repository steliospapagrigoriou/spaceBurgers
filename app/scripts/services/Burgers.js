'use strict';

var resourceUrl = '/spaceApi/burgers/'

angular.module('spaceBurgersApp')
    .factory('Burgers', ['$http', function($http) {
        return {
            getAll: function () {
                return $http.get('/api/burgers.json')
            },
            buyOne: function(burgerId, bitcoins){
                return $http.post(
                    resourceUrl,
                    {
                        Id: burgerId,
                        Bitcoin: bitcoins
                    }
                );
            }
        }
    }]);