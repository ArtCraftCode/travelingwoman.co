require('../../node_modules/angular/angular')
require('../../node_modules/angular-ui-router/build/angular-ui-router')
require('../../node_modules/ngstorage/ngStorage')

require('./materials')

var travelingWoman = angular.module('travelingWoman', [
  // angular
  'ui.router',
  'ngStorage',

  // my stuff
  'Materials'
])

// main controller
travelingWoman.controller('travelingWomanController', function($http, $scope, $state, materialsList) {
  $scope.name = "travelingWomanController"
  $scope.materials = materialsList
  $scope.sortOrder = 'weight'
  $scope.reverse = false
  $scope.measurements = 'in'

  $scope.sort = function(orderBy) {
    if ($scope.sortOrder == orderBy) {
      $scope.reverse = !$scope.reverse
    } else {
      $scope.sortOrder = orderBy
      $scope.reverse = false
    }
  }

  $scope.convert = function(convertTo) {
    $scope.measurements = convertTo
  }
})
