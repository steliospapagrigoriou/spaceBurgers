'use strict';

function listThe(burgerList){

}
(function($) {
    $.fn.uniformHeight = function() {
        var maxHeight   = 0,
            max         = Math.max;

        return this.each(function() {
            maxHeight = max(maxHeight, $(this).height());
        }).height(maxHeight);
    }
})(jQuery);


angular.module('spaceBurgersApp')
    .controller('burgerListCtrl',['$scope', 'Burgers', function ($scope, Burgers) {

        Burgers.getAll()
            .then(function(response){
                $scope.burgerList = response.data.burgers;
            })

    }]);
