(function (angular) {
    "use strict";
    ///////////// AngularJS Code ///////
    var mi = angular.module('myApp')
        .controller('ViewController', ['$log', '$scope', 'grades', ViewController]);

    ///////////// JavaScript Code ///////

    function ViewController($log, $scope, grades) {
        $scope.students = grades.getGrades();
        $scope.currentPage = 0;
        $scope.pageSize = 10;

        $scope.numberOfPages = function () {
            return Math.ceil($scope.students.length / $scope.pageSize);
        }

        $scope.setSelected = function () {
            $scope.selectedStudent = this.student;
            $scope.selectedId = this.student.id;
            $scope.selectedName = this.student.name;
            $scope.selectedGrade = this.student.grade;
            $scope.selectedEmail = this.student.email;
            $scope.selectedDate = this.student.date;
            $scope.selectedAddress = this.student.address;
            $scope.selectedCity = this.student.city;
            $scope.selectedCountry = this.student.country;
            $scope.selectedZip = this.student.zip;
            $scope.selectedSubject = this.student.subject;
        }

        $scope.removeSelected = function(selectedStudent) {
            grades.removeGrade($scope.selectedStudent);
            $scope.selectedStudent = "";
        }
    }
})(angular);
