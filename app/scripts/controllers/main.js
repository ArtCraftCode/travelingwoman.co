'use strict';

/**
 * @ngdoc function
 * @name travelingWomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the travelingWomanApp
 */
angular.module('travelingWomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.repeats = [7, 9, 11, 13, 15, 17, 19, 21];
    $scope.charts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });
