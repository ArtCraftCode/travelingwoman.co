'use strict';

/**
 * @ngdoc overview
 * @name travelingWomanApp
 * @description
 * # travelingWomanApp
 *
 * Main module of the application.
 */
angular
  .module('travelingWomanApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
