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
    $scope.complete = false;
    $scope.repeats = [7, 9, 11, 13, 15, 17, 19, 21];
    $scope.charts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    $scope.abbreviations = [
      { 'stitch': 'k', 'definition': 'knit' },
      { 'stitch': 'p', 'definition': 'purl' },
      { 'stitch': 'yo', 'definition': 'yarn over' },
      { 'stitch': 'k2tog', 'definition': 'knit two together' },
      { 'stitch': 'ssk', 'definition': 'slip, slip, knit both slipped stitches together' },
      { 'stitch': 'CO', 'definition': 'cast on' },
      { 'stitch': 'BO', 'definition': 'bind off' },
      { 'stitch': 'RS/WS', 'definition': 'right side/wrong side' },
      { 'stitch': 'pm', 'definition': 'place marker' },
      { 'stitch': 'slm', 'definition': 'slip marker' },
      { 'stitch': 'st/s', 'definition': 'stitch/es' }
    ];

    $scope.repeat = 0;
    $scope.chart = 0;

    $scope.generate = function() {
      $scope.complete = true;
    };
  });
