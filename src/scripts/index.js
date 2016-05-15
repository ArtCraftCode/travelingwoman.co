require('../../node_modules/angular/angular')
// var _ = require('lodash')

$('.size-info').hide();

$('td.details').mouseover(function() {
  $(this).find('.circle').hide();
  $(this).find('.size-info').show();
})

$('td.details').mouseout(function() {
  $(this).find('.circle').show();
  $(this).find('.size-info').hide();
})

var travelingWoman = angular.module('travelingWoman', [])

travelingWoman.controller('travelingWomanController', function ($scope) {
  // stuff
})

travelingWoman.filter('inchesCentimeters', function () {
  return function (input) {
    var inches = parseInt(input, 10);
    var cms = inches * 2.54;
    return inches + '" / ' + Math.round(cms, 0) + 'cm';
  }
})

travelingWoman.filter('yardsMeters', function () {
  return function (input) {
    var yards = parseInt(input, 10);
    var meters = yards * 0.9144;
    return yards + 'yd / ' + Math.round(meters, 0) + 'm';
  }
})