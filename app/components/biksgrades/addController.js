(function (angular) {
    "use strict";
    ///////////// AngularJS Code ///////
    var mi = angular.module('myApp')
        .controller('AddGradeController', ['$log', '$scope', '$location', 'grades', AddGradeController]);

    ///////////// JavaScript Code ///////

    function AddGradeController($log, $scope, $location,  grades) {
        $log.log("In AddGrade Controller");

        $scope.go = function () {
            $log.log("Adding " + $scope.student.id);
            grades.addNewGrade($scope.student);
            $location.path("/biksgrades");
        }
    }
})(angular);
