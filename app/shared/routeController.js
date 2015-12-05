(function (angular) {
    "use strict";
    ///////////// AngularJS Code ///////
    var mi = angular.module('myApp')
        .controller('RouteController', ['$scope', '$location', '$log', RouteController]);

    ///////////// JavaScript Code ///////

    function RouteController($scope, $location, $log){
        $scope.selectedIndex = 0;
        $log.log($scope.selectedIndex);
        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/palindrome");
                    break;
                case 1:
                    $location.url("/biksgrades");
                    break;
                case 2:
                    $location.url("/cv");
                    break;
            }
        })}
})(angular);
