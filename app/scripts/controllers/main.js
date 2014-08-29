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
    $scope.repeats = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
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

    $scope.setUpInstructions = [
      {
        'number': '1 (WS)',
        'instructions': 'k2, pm, yo, p to last 2 sts, yo, pm, k2',
        'stitches': 11
      },
      {
        'number': '2 (RS)',
        'instructions': 'k2, slm, yo, k3, yo, pm, k1, pm, yo, k to marker, yo, slm, k2',
        'stitches': 15
      },
      {
        'number': 3,
        'instructions': 'k2, slm, yo, p to last marker, yo, slm, k2',
        'stitches': 17
      },
      {
        'number': 4,
        'instructions': 'k2, slm, yo, k to marker, yo, slm, k1, slm, yo, k to marker, yo, slm, k2',
        'stitches': 21
      }
    ];

    $scope.generate = function() {
      $scope.complete = true;
      maths();
    };

    $scope.regenerate = function() {
      $scope.complete = false;
    };

    function maths() {
      $scope.multiple = $scope.repeat * 14;
      // 4 border, 1 center
      $scope.total = $scope.multiple + 5;

      $scope.startingSts = 21;
      $scope.difference = $scope.total - $scope.startingSts;
      $scope.increases = 6;
      $scope.numRepeats = Math.floor($scope.difference / $scope.increases);

      if ($scope.difference % $scope.increases === 0) {
        prettyIncreases();
      } else {
        wonkyIncreases();
      }
    }

    function prettyIncreases() {
      $scope.numRepeatsSts = $scope.total;
      $scope.nextRow = 'k2, yo, p2tog, p to last 4 sts (removing both center markers as you come to them), p2tog, yo, k2';
    }

    function wonkyIncreases() {
      // so much logic
      $scope.numRepeatsSts = $scope.numRepeats * $scope.increases + $scope.startingSts;

      var remainder = $scope.difference % $scope.increases;
      if (remainder === 2) {
        $scope.nextRow = 'k2, slm, yo, p to last marker (removing both center markers as you come to them), yo, slm, k2';
      } else if (remainder === 4) {
        // increase 4
        $scope.nextRow = 'k2, slm, yo, p to m, yo, remove marker, p1, remove marker, yo, p to m, yo, slm, k2';
      }
    }
  });
