require('../../node_modules/angular/angular')
require('../../node_modules/angular-ui-router/build/angular-ui-router')
require('../../node_modules/ngstorage/ngStorage')

require('./materials')

var _ = require('lodash')

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
  $scope.showWeight = 5
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

  $scope.show = function(showWeight) {
    $scope.showWeight = showWeight
    if (showWeight === 5) {
      $scope.materials = materialsList
    } else if (showWeight === 2) {
      // sport & dk is a special case
      $scope.materials = _.filter(materialsList, function(material) {
        return material.weight === 2 || material.weight === 3
      })
    } else {
      $scope.materials = _.filter(materialsList, function(material) {
        return material.weight === showWeight
      })
    }
  }

  $scope.convert = function(convertTo) {
    $scope.measurements = convertTo
  }
})
