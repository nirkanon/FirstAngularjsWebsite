(function (angular) {
    "use strict";
    ///////////// AngularJS Code ///////
    var mi = angular.module('myApp', ['ngAnimate', 'ngRoute','ngMaterial']);

    mi.config(function($routeProvider){
        $routeProvider
            .when('/palindrome',{
                templateUrl : '/MyWebsite/assets/views/palindrome.html',
                controller: 'PalindromeController',
                controllerAs: 'paliCtrl'
            })
            .when('/biksgrades',{
                templateUrl: '/MyWebsite/assets/views/biksgrades.html',
                controller: 'ViewController',
                controllerAs: 'viewCtrl'
            })
            .when('/cv',{
                templateUrl: '/MyWebsite/assets/views/cv.html'
            })
            .when('/addsubject',{
                templateUrl: '/MyWebsite/assets/views/addsubject.html',
                controller: 'AddGradeController'
            })
            .otherwise({redirectTo: "/palindrome"});
    })

    mi.filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });
    ///////////// JavaScript Code ///////
})(angular);
