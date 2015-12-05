(function (angular) {
    "use strict";
    ///////////// AngularJS Code ///////
    var mi = angular.module('myApp')
        .controller('PalindromeController', ['$log','$rootScope', 'palindrome', PalindromeController]);

    ///////////// JavaScript Code ///////

    function PalindromeController($log, $rootScope, palindrome){
        this._$log = $log;
        this._palindrome = palindrome;
        this.inputValue = "";
        this.result = [];
        this._$log.log("In Palindrome Controller");
        this.foundStats = 0;
        this.notFoundStats = 0;
        this.inputValue = $rootScope.nir;
        $rootScope.nir = "Kanon";
    }

    PalindromeController.prototype.go = function(){
        this._$log.log("Go Clicked");
        this.result = this._palindrome.splitAndFilter(this.inputValue);
        this.foundStats = this._palindrome.getFoundStatistics();
        this.notFoundStats = this._palindrome.getNotFoundStatistics();
    }
})(angular);
