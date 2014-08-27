'use strict';

/**
 * @ngdoc function
 * @name travelingWomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the travelingWomanApp
 */
angular.module('travelingWomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
