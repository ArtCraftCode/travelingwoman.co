require('../../node_modules/angular/angular')
require('../../node_modules/angular-ui-router/build/angular-ui-router')
require('../../node_modules/ngstorage/ngStorage')

var travelingWoman = angular.module('travelingWoman', [
  // angular
  'ui.router',
  'ngStorage'
])

// main controller
travelingWoman.controller('travelingWomanController', function($http, $scope, $state) {
  $scope.name = "travelingWomanController"
  // sad nothing to do here
})
