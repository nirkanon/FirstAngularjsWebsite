(function (angular) {
    "use strict";
    ///////////// AngularJS Code ///////
    var mi = angular.module('myApp')
        .factory('grades', ['$log', GradesFactory]);

    ///////////// JavaScript Code ///////

    function GradesFactory($log) {
        var data = [];

        return {
            addNewGrade: addNewGrade,
            getGrades: getGrades,
            removeGrade: removeGrade
        }

        function addNewGrade(studentData) {
            data.push(studentData);
            $log.log(data.length);
        }

        function getGrades() {
            return data;
        }

        function removeGrade(gradeToRemove){
            var index = data.indexOf(gradeToRemove);
            data.splice(index, 1);

        }
    }
})(angular);
