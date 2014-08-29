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

    $scope.chartA = [
      {
        'number': '1',
        'instructions': 'k1, *yo, k5, slk2p, k5, yo, k1 repeat from * to end'
      },
      {
        'number': '2, and all WS rows',
        'instructions': 'k the k sts, p the p sts (consult chart if this does not make sense)'
      },
      {
        'number': '3',
        'instructions': 'k2, p1, *k1, yo, k4, slk2p, k4, yo, k1, p1 repeat from * to last 2 sts, k2'
      },
      {
        'number': '5',
        'instructions': 'k2tog, yo, k2, p1, *k2, yo, k3, slk2p, k3, yo, k2, p1 repeat from * to last 4 sts, k2, yo, ssk'
      },
      {
        'number': '7',
        'instructions': 'k1, k2tog, yo, k3, p1, *k3, yo, k2, slk2p, k2, yo, k3, p1 repeat from * to last 6 sts, k3, yo, ssk, k1'
      },
      {
        'number': '9',
        'instructions': 'k1, k2tog, k1, yo, k4, p1, *k4, yo, k1, slk2p, k1, yo, k4, p1 repeat from * to last 8 sts, k4, yo, k1, ssk, k1'
      },
      {
        'number': '11',
        'instructions': 'k4, yo, k1, yo, k5, p1, *k5, yo, slk2p, yo, k5, p1 repeat from * to last 10 sts, k5, yo, k1, yo, k4'
      }
    ];

    $scope.chartB = [
      {
        'number' : '1',
        'instructions': 'k1, *yo, k5, slk2p, k5, yo, k1 repeat from * to end'
      },
      {
        'number': '2, and all WS rows',
        'instructions': 'k the k sts, p the p sts (consult chart if this does not make sense)'
      },
      {
        'number' : '3',
        'instructions': 'k2, p1, *k1, yo, k4, slk2p, k4, yo, k1, p1 repeat from * to last 2 sts, k2'
      },
      {
        'number' : '5',
        'instructions': 'k2tog, yo, k2, p1, *k2, yo, k3, slk2p, k3, yo, k2, p1 repeat from * to last 4 sts, k2, to, ssk'
      },
      {
        'number' : '7',
        'instructions': 'k1, k2tog, yo, k3, p1, *k3, yo, k2, slk2p, k2, yo, k3, p1 repeat from * to last 6 sts, k3, yo, ssk, k1'
      },
      {
        'number': '9',
        'instructions': '*k2, k2tog, yo repeat from * 2x, p1, *yo, ssk, k2, yo, k1, slk2p, k1, yo, k2, k2tog, yo, p1 repeat from * to last 8 sts, *yo, ssk, k2 repeat from * 2x'
      },
      {
        'number': '11',
        'instructions': 'k3, k2tog, yo, k2, k2tog, yo, k1, p1, *k1, yo, ssk, k2, yo, slk2p, yo, k2, k2tog, yo, k1, p1 repeat from * to last 10 sts, k1, yo, ssk, k2, yo, ssk, k3'
      },
      {
        'number' : '13',
        'instructions': 'k1, yo, ssk, k5, k2tog, yo, k2, p1, *(yo, ssk) 2x, k5, (k2tog, yo) 2x, p1 repeat from * to last 12 sts, k2, yo, ssk, k5, k2tog, yo, k1'
      },
      {
        'number' : '15',
        'instructions': 'k2, *yo,ssk repeat from * 2x, k3, *k2tog, yo repeat from * 2x, k1, p1, *k1, (yo, ssk) 2x, k3, (k2tog, yo) 2x, k1, p1 repeat from * to last 14 sts, k1, *yo, ssk repeat from * 2x, k3, *k2tog, yo repeat from * 2x, k2'
      },
      {
        'number' : '17',
        'instructions': 'k3, yo, *ssk, yo repeat from * 2x, k1, slk2p, k1, yo, *k2tog, yo repeat from * 2x, p1, *yo, (ssk, yo) 2x, k1, slk2p, k1, yo, (k2tog, yo) 2x, p1 repeat from * to last 16 sts, yo, *ssk, yo repeat from * 2x, k1, slk2p, k1, yo, *k2tog, yo repeat from * 2x, k3'
      },
      {
        'number' : '19',
        'instructions': 'k4, yo, *ssk, yo repeat from * 3x, slk2p, yo, *k2tog, yo repeat from * 2x, k1, p1 *k1, yo, (ssk, yo) 2x, slk2p, yo, (k2tog, yo) 2x, k1, p1 repeat from * to last 18 sts, k1, yo, *ssk, yo repeat from * 3x, slk2p, yo, *k2tog, yo repeat from * 2x, k4'
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
