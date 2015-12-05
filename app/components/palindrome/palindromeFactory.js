(function (angular) {
    "use strict";
    ///////////// AngularJS Code ///////
    var mi = angular.module('myApp')
        .factory('palindrome', ['$log', PalindromeFactory]);

    ///////////// JavaScript Code ///////

    function PalindromeFactory($log){
        var _$log = $log;
        _$log.log("In Palindrome Factory");
        var originalLength = 0;
        var foundPalindromesCount = 0;
        var notFoundPalindromesCount = 0;

        return{
            splitAndFilter:splitAndFilter,
            getFoundStatistics:getFoundStatistics,
            getNotFoundStatistics:getNotFoundStatistics
        }
        function splitAndFilter(inputData){
            originalLength = inputData.split(" ").length;
            return makeStatistics(
                inputData
                    .trim()
                    .split(" ")
                    .filter(removeEmptyCells)
                    .filter(checkArrayForPalindromes));
        }

        function checkArrayForPalindromes(value){
            var reversedWord = value.split("").reverse().join("");
            if(value != reversedWord){
                return false;
            }
            return true;
        }

        function removeEmptyCells(value){
            if(value.length == 0){
                return false;
            }
            return true;
        }

        function makeStatistics(inputData){
            foundPalindromesCount = Math.round((inputData.length / originalLength) * 100);
            notFoundPalindromesCount = Math.round(((originalLength - inputData.length) / originalLength) * 100);
            return inputData;
        }

        function getFoundStatistics(){
            return foundPalindromesCount;
        }

        function getNotFoundStatistics(){
            return notFoundPalindromesCount;
        }
    }
})(angular);
