'use strict';

/**
 * @ngdoc function
 * @name jeopardyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jeopardyApp
 */
angular.module('jeopardyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
